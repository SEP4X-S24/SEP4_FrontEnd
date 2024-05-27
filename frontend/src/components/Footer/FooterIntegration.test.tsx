import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

// Utility function to render components with router context
const renderWithRouter = (component: React.ReactElement) => {
  return render(<Router>{component}</Router>);
};

describe("Footer Integration Tests", () => {
  it("renders all sections correctly", () => {
    renderWithRouter(<Footer />);

    // Check if all sections are present
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Quick links")).toBeInTheDocument();
  });

  it("navigates to correct routes when links are clicked", () => {
    renderWithRouter(<Footer />);

    // Simulate clicking on links and check if the href attributes are correct
    expect(screen.getByText("Home").getAttribute("href")).toBe("/");

    // Get all "Profile" links and check their href attributes
    const profileLinks = screen.getAllByText("Profile");
    profileLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/profile");
    });

    // Get all "Dashboard" links and check their href attributes
    const dashboardLinks = screen.getAllByText("Dashboard");
    dashboardLinks.forEach((link) => {
      expect(link.getAttribute("href")).toBe("/dashboard");
    });
  });
});
