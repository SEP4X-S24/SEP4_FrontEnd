// AuthContext.test.tsx
import React from "react";
import { render, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";
import Account from "../../models/Account";
import AccountService from "../Interfaces/AccountService";
import AccountHttpService from "../impl/AccountHttpService";
import Cookies from "js-cookie";
import axiosMock from "axios-mock-adapter";
import axios from "axios";

// Mocking the AccountHttpService
jest.mock("../impl/AccountHttpService");
const mockedAccountService = jest.mocked(AccountHttpService, true);

// Helper component to test context consumption
const AuthConsumerComponent = () => {
  const { isAuthenticated, user, login, logout, register, update } = useAuth();
  return (
    <div>
      <div data-testid="isAuthenticated">{isAuthenticated.toString()}</div>
      <div data-testid="user">{JSON.stringify(user)}</div>
    </div>
  );
};

// Setting up the mock server
const mock = new axiosMock(axios);

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
    const { getByTestId } = render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    expect(getByTestId("isAuthenticated").textContent).toBe("false");
    expect(getByTestId("user").textContent).toBe("undefined");
  });

  it("should login a user and set state correctly", async () => {
    mockedAccountService.prototype.login.mockResolvedValue("token");
    mockedAccountService.prototype.getUser.mockResolvedValue(testUser);

    const { getByTestId } = render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      const { login } = useAuth();
      await login(testUser);
    });

    expect(Cookies.set).toHaveBeenCalledWith("jwtToken", "token");
    expect(getByTestId("isAuthenticated").textContent).toBe("true");
    expect(getByTestId("user").textContent).toBe(JSON.stringify(testUser));
  });

  it("should logout a user and clear state", async () => {
    mockedAccountService.prototype.logout.mockResolvedValue();

    const { getByTestId } = render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      const { logout } = useAuth();
      await logout();
    });

    expect(Cookies.remove).toHaveBeenCalledWith("jwtToken");
    expect(getByTestId("isAuthenticated").textContent).toBe("false");
    expect(getByTestId("user").textContent).toBe("undefined");
  });

  it("should register a user without setting state", async () => {
    mockedAccountService.prototype.register.mockResolvedValue();

    const { getByTestId } = render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      const { register } = useAuth();
      await register(testUser);
    });

    expect(getByTestId("isAuthenticated").textContent).toBe("false");
    expect(getByTestId("user").textContent).toBe("undefined");
  });

  it("should update a user and set state correctly", async () => {
    mockedAccountService.prototype.update.mockResolvedValue();
    mockedAccountService.prototype.getUser.mockResolvedValue(testUser);

    const { getByTestId } = render(
      <AuthProvider>
        <AuthConsumerComponent />
      </AuthProvider>
    );

    await act(async () => {
      const { update } = useAuth();
      await update(testUser, "newPassword");
    });

    expect(getByTestId("user").textContent).toBe(JSON.stringify(testUser));
  });

  it("should throw an error if useAuth is used outside of AuthProvider", () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    expect(() => render(<AuthConsumerComponent />)).toThrow(
      "useAuth must be used within an AuthProvider"
    );

    consoleErrorSpy.mockRestore();
  });
});
