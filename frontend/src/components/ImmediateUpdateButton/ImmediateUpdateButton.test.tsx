import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ImmediateUpdateButton from "./ImmediateUpdateButton";
import { useAuth } from "../../services/auth/AuthContext";

// Mock useAuth
jest.mock("../../services/auth/AuthContext");
const mockUseAuth = useAuth as jest.Mock;

describe("ImmediateUpdateButton", () => {
  const setIsCurrentWeatherRequested = jest.fn();
  const setCurrentWeather = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      token: "mockToken",
    });
  });

  it("renders the component", () => {
    const { getByRole } = render(
      <ImmediateUpdateButton
        isCurrentWeatherRequested={false}
        setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
        setCurrentWeather={setCurrentWeather}
      />
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("calls setIsCurrentWeatherRequested on click", () => {
    const { getByRole } = render(
      <ImmediateUpdateButton
        isCurrentWeatherRequested={false}
        setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
        setCurrentWeather={setCurrentWeather}
      />
    );

    const button = getByRole("button");
    fireEvent.click(button);
    expect(setIsCurrentWeatherRequested).toHaveBeenCalledWith(true);
  });

  it("renders the component only for authenticated users", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      token: null,
    });

    const { queryByRole } = render(
      <ImmediateUpdateButton
        isCurrentWeatherRequested={false}
        setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
        setCurrentWeather={setCurrentWeather}
      />
    );

    const button = queryByRole("button");
    expect(button).toBeNull();
  });

  it("does not call setIsCurrentWeatherRequested on click for unauthenticated users", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      token: null,
    });

    const { queryByRole } = render(
      <ImmediateUpdateButton
        isCurrentWeatherRequested={false}
        setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
        setCurrentWeather={setCurrentWeather}
      />
    );

    const button = queryByRole("button");
    if (button) {
      fireEvent.click(button);
    }
    expect(setIsCurrentWeatherRequested).not.toHaveBeenCalled();
  });
});
