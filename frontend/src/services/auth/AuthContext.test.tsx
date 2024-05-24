import React from "react";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";
import Account from "../../models/Account";
import AccountHttpService from "../impl/AccountHttpService";
import Cookies from "js-cookie";
import axiosMockAdapter from "axios-mock-adapter";
import axios from "axios";

// Mocking the AccountHttpService
jest.mock("../impl/AccountHttpService");
const MockedAccountHttpService = AccountHttpService as jest.MockedClass<
  typeof AccountHttpService
>;

// Helper component to test context consumption
const AuthConsumerComponent = () => {
  const { isAuthenticated, user, login, logout, register, update } = useAuth();
  return (
    <div>
      <div data-testid="isAuthenticated">{isAuthenticated.toString()}</div>
      <div data-testid="user">{user ? JSON.stringify(user) : "undefined"}</div>
      <button
        onClick={() =>
          login({ email: "test@example.com", password: "password" })
        }
      >
        Login
      </button>
      <button onClick={() => logout()}>Logout</button>
      <button
        onClick={() =>
          register({ email: "test@example.com", password: "password" })
        }
      >
        Register
      </button>
      <button
        onClick={() =>
          update(
            { email: "test@example.com", password: "password" },
            "newPassword"
          )
        }
      >
        Update
      </button>
    </div>
  );
};

// Setting up the mock server
const mock = new axiosMockAdapter(axios);

describe("AuthContext", () => {
  const testUser: Account = {
    userid: 1,
    email: "test@example.com",
    password: "password",
    firstname: "John",
    lastname: "Doe",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    Cookies.set = jest.fn();
    Cookies.get = jest.fn().mockReturnValue("");
    Cookies.remove = jest.fn();
  });

  it("should initialize with default values", () => {
    render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId("isAuthenticated").textContent).toBe("false");
    expect(screen.getByTestId("user").textContent).toBe("undefined");
  });

  it("should login a user and set state correctly", async () => {
    MockedAccountHttpService.prototype.login.mockResolvedValue("token");
    MockedAccountHttpService.prototype.getUser.mockResolvedValue(testUser);

    render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Login"));
    });

    await act(async () => {
      // Wait for state updates and effects to complete
    });

    expect(Cookies.set).toHaveBeenCalledWith("jwtToken", "token");
    expect(screen.getByTestId("isAuthenticated").textContent).toBe("true");
    expect(screen.getByTestId("user").textContent).toBe(
      JSON.stringify(testUser)
    );
  });

  it("should logout a user and clear state", async () => {
    MockedAccountHttpService.prototype.logout.mockResolvedValue();

    render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Logout"));
    });

    await act(async () => {
      // Wait for state updates and effects to complete
    });

    expect(Cookies.remove).toHaveBeenCalledWith("jwtToken");
    expect(screen.getByTestId("isAuthenticated").textContent).toBe("false");
    expect(screen.getByTestId("user").textContent).toBe("undefined");
  });

  it("should register a user without setting state", async () => {
    MockedAccountHttpService.prototype.register.mockResolvedValue();

    render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Register"));
    });

    expect(screen.getByTestId("isAuthenticated").textContent).toBe("false");
    expect(screen.getByTestId("user").textContent).toBe("undefined");
  });

  it("should update a user and set state correctly", async () => {
    MockedAccountHttpService.prototype.update.mockResolvedValue();
    MockedAccountHttpService.prototype.getUser.mockResolvedValue(testUser);

    render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Update"));
    });

    await act(async () => {
      // Wait for state updates and effects to complete
    });

    expect(screen.getByTestId("user").textContent).toBe(
      JSON.stringify(testUser)
    );
  });

  it("should throw an error if useAuth is used outside of AuthProvider", () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    expect(() => render(<AuthConsumerComponent />)).toThrow(
      "useAuth must be used within an AuthProvider"
    );

    consoleErrorSpy.mockRestore();
  });
});
