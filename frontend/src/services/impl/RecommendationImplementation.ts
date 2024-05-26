import RecomendationService from "../Interfaces/RecomendationService";
import Recommendation from "../../models/Recommendation";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

export default class RecommendationImplementation
  implements RecomendationService
{
  demoRecomendation(): Recommendation {
    const demoRecommendation: Recommendation = {
      description: "An error apeared by fetching data",
    };
    return demoRecommendation;
  }

  async fetchRecommendation(token: string): Promise<Recommendation> {
    try {
      const response = await axios.get(
        "https://weatherstation4dev.azurewebsites.net/api/GetRecommendation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const jsonData = response.data;
      console.log(jsonData);

      const recivedRecommendation: Recommendation = {
        description: jsonData.recommendation,
      };

      return recivedRecommendation;
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
      return this.demoRecomendation();
    }
  }
}
