import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrentWeatherComponent from "./CurrentWeather";
import * as AuthContext from "../../../../services/auth/AuthContext";

// Mock the auth context
jest.mock("../../../../services/auth/AuthContext", () => ({
  useAuth: jest.fn(),
}));

// Mock the ImmediateUpdateButton
jest.mock(
  "../../../../components/ImmediateUpdateButton/ImmediateUpdateButton",
  () => ({
    __esModule: true,
    default: jest.fn(() => <button>Update Weather</button>),
  })
);

describe("CurrentWeatherComponent", () => {
  const mockSetIsCurrentWeatherRequested = jest.fn();
  const mockSetCurrentWeather = jest.fn();
  const weatherProps = {
    currentWeather: {
      location: "New York",
      temperature: 25,
      weatherState: "Sunny",
      time: "2 PM",
    },
    isCurrentWeatherRequested: false,
    setIsCurrentWeatherRequested: mockSetIsCurrentWeatherRequested,
    setCurrentWeather: mockSetCurrentWeather,
  };

  beforeEach(() => {
    (AuthContext.useAuth as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with given weather data", () => {
    render(<CurrentWeatherComponent {...weatherProps} />);
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("25°")).toBeInTheDocument();
    expect(screen.getByText("Sunny")).toBeInTheDocument();
    expect(screen.getByText("2 PM")).toBeInTheDocument();
  });

  it("does not render update button when not authenticated", () => {
    render(<CurrentWeatherComponent {...weatherProps} />);
    expect(screen.queryByText("Update Weather")).toBeNull();
  });
});
