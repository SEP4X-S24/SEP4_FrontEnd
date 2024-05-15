import RecomendationService from "../RecomendationService";
import Recommendation from "../../models/Recommendation";
import axios from "axios";

export default class RecommendationImplementation
  implements RecomendationService
{
  demoRecomendation(): Recommendation {
    const demoRecommendation: Recommendation = {
      description: "An error apeared by fetching data",
    };
    return demoRecommendation;
  }

  async fetchRecommendation(): Promise<Recommendation> {
    try {
      const response = await axios.get(
        "https://weatherstation4dev.azurewebsites.net/api/GetRecommendation"
      );

      const jsonData = response.data;
      console.log(jsonData);

      const recivedRecommendation: Recommendation = {
        description: jsonData.Value,
      };

      return recivedRecommendation;
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
      return this.demoRecomendation(); // Return null or handle the error as appropriate
    }
  }
}
