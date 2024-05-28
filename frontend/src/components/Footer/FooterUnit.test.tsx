import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import { AuthProvider, useAuth } from "../../services/auth/AuthContext";

// Utility function to render components with router and auth context
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <AuthProvider>
      <Router>{component}</Router>
    </AuthProvider>
  );
};

// Mocking useAuth to control authentication state
jest.mock("../../services/auth/AuthContext", () => {
  const originalModule = jest.requireActual("../../services/auth/AuthContext");
  return {
    ...originalModule,
    useAuth: jest.fn(),
  };
});

describe("Footer", () => {
  beforeEach(() => {
    const { useAuth } = require("../../services/auth/AuthContext");
    useAuth.mockReturnValue({ isAuthenticated: false });
  });

  it("renders without crashing", () => {
    renderWithProviders(<Footer />);
  });

  it("displays the correct about text", () => {
    const { getByText } = renderWithProviders(<Footer />);
    expect(
      getByText(
        "Starting from the fact that weather is dynamic and can vary significantly even in the one location, it is often essential to have a clear picture of the meteorological conditions at a fixed point at a moment in time, not just some average values. Our system provides a solution for a technical and digital tool that would allow the measurement of meteorological conditions in a specific location and to present the results to users in live mode. Also to give suggestions about clothes in real time considering the weather conditions."
      )
    ).toBeInTheDocument();
  });

  it("contains a link to the home page", () => {
    const { getByText } = renderWithProviders(<Footer />);
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });

  it("contains social media icons", () => {
    const { getByTestId } = renderWithProviders(<Footer />);
    const facebookIcon = getByTestId("facebook-icon");
    const linkedinIcon = getByTestId("linkedin-icon");

    expect(facebookIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it("renders profile and dashboard links when authenticated", () => {
    const { useAuth } = require("../../services/auth/AuthContext");
    useAuth.mockReturnValue({ isAuthenticated: true });

    const { getAllByText } = renderWithProviders(<Footer />);

    const profileLinks = getAllByText("Profile");
    profileLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/profile");
    });

    const dashboardLinks = getAllByText("Dashboard");
    dashboardLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/dashboard");
    });
  });

  it("does not render profile and dashboard links when not authenticated", () => {
    const { getByText, queryByText } = renderWithProviders(<Footer />);

    expect(getByText("Home")).toBeInTheDocument();
    expect(queryByText("Profile")).toBeNull();
    expect(queryByText("Dashboard")).toBeNull();
  });
});
