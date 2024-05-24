import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import RecommendationPage from "./RecommendationPage";
import { useAuth } from "../../services/auth/AuthContext";
import RecommendationFetcher from "../../services/impl/RecommendationFetcher";

jest.mock("../../services/auth/AuthContext");
jest.mock("../../services/impl/RecommendationFetcher");

describe("RecommendationPage Component", () => {
  const mockUseAuth = useAuth as jest.Mock;
  const mockRecommendationFetcher =
    RecommendationFetcher.initRecommendationFetch as jest.Mock;

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      token: "fake-token",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <RecommendationPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches and displays recommendation correctly", async () => {
    const recommendation = {
      description: "A recommended item for you!",
    };

    mockRecommendationFetcher.mockResolvedValue(recommendation);

    render(
      <MemoryRouter>
        <RecommendationPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("A recommended item for you!")
      ).toBeInTheDocument();
    });
  });

  it("uses cached recommendation if available", async () => {
    const recommendation = {
      description: "A cached recommendation!",
    };
    localStorage.setItem("recommendation", JSON.stringify(recommendation));

    render(
      <MemoryRouter>
        <RecommendationPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("A cached recommendation!")).toBeInTheDocument();
    });

    // Clean up
    localStorage.removeItem("recommendation");
  });
});
