import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";
import Recommendation from "../../../../models/Recommendation";

describe("Banner Component", () => {
  it("renders with a recommendation", () => {
    const recommendation: Recommendation = {
      description: "A great recommendation for you!",
    };

    render(<Banner recommendation={recommendation} />);

    // Check if the recommendation description is displayed
    expect(
      screen.getByText("A great recommendation for you!")
    ).toBeInTheDocument();
  });

  it("shows loading message when no recommendation is provided", () => {
    render(<Banner recommendation={null} />);

    // Check if the loading message is displayed
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
