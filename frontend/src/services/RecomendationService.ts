import { Suggestion } from "@testing-library/react";
import React from "react";

interface RecomendationService{
  fetchWeatherSuggestion(): Promise<Suggestion>;
}

export default RecomendationService;
