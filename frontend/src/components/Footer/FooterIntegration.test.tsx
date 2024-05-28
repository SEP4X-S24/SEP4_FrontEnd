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

// Mock implementation to control authentication state
jest.mock('../../services/auth/AuthContext', () => {
  const originalModule = jest.requireActual('../../services/auth/AuthContext');
  return {
    ...originalModule,
    useAuth: jest.fn(),
  };
});


describe("Footer Integration Tests", () => {
  beforeEach(() => {
    const { useAuth } = require('../../services/auth/AuthContext');
    useAuth.mockReturnValue({ isAuthenticated: false });
  });

  it("renders all sections correctly when not authenticated", () => {
    renderWithProviders(<Footer />);

    // Check if all sections are present
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Quick links")).toBeInTheDocument();
  });

  it("renders all sections correctly when authenticated", () => {
    const { useAuth } = require('../../services/auth/AuthContext');
    useAuth.mockReturnValue({ isAuthenticated: true });

    renderWithProviders(<Footer />);

    // Check if all sections are present
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Quick links")).toBeInTheDocument();
  });

  it("navigates to correct routes when links are clicked (not authenticated)", () => {
    renderWithProviders(<Footer />);

    // Simulate clicking on links and check if the href attributes are correct
    expect(screen.getByText("Home").getAttribute("href")).toBe("/");
    expect(screen.queryByText("Profile")).toBeNull();
    expect(screen.queryByText("Dashboard")).toBeNull();
  });

  it("navigates to correct routes when links are clicked (authenticated)", () => {
    const { useAuth } = require('../../services/auth/AuthContext');
    useAuth.mockReturnValue({ isAuthenticated: true });

    renderWithProviders(<Footer />);

    // Simulate clicking on links and check if the href attributes are correct
    expect(screen.getByText("Home").getAttribute("href")).toBe("/");
    const profileLinks = screen.getAllByText("Profile");
    profileLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/profile");
    });

    const dashboardLinks = screen.getAllByText("Dashboard");
    dashboardLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/dashboard");
    });
  });

  it("renders social media icons correctly", () => {
    renderWithProviders(<Footer />);

    // Check if the social media icons are present
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
  });
});
