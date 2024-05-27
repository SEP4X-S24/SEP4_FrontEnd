import React, { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

const renderWithRouter = (component: ReactElement): RenderResult => {
  return render(<Router>{component}</Router>);
};

describe("Footer", () => {
  it("renders without crashing", () => {
    renderWithRouter(<Footer />);
  });

  it("displays the correct text", () => {
    const { getByText } = renderWithRouter(<Footer />);
    expect(
      getByText("Lorem ipsum In convallis justo at eleifend sagittis.")
    ).toBeInTheDocument();
  });

  it("contains a link to the home page", () => {
    const { getByText } = renderWithRouter(<Footer />);
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });

  it("contains social media icons", () => {
    const { getByTestId } = renderWithRouter(<Footer />);
    const facebookIcon = getByTestId("facebook-icon");
    const linkedinIcon = getByTestId("linkedin-icon");

    expect(facebookIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });
});
