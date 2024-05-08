import { Suggestion } from "@testing-library/react";

interface ClothesSuggestionService {
  fetchWeatherSuggestion(): Promise<Suggestion>;
}

export default ClothesSuggestionService;
