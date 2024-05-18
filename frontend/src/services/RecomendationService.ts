import { Suggestion } from "@testing-library/react";
import React from "react";
import Recommendation from "../models/Recommendation";

interface RecomendationService {
  fetchRecommendation(): Promise<Recommendation>;
}

export default RecomendationService;
