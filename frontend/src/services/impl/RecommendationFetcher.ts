import RecommendationService from "../RecommendationService";
import RecommendationImplementation from "./RecommendationImplementation";
const service: RecommendationService = new RecommendationImplementation();

const RecommendationFetcher = {
  async initRecommendationFetch(token: string) {
    const d = await service.fetchRecommendation(token);
    localStorage.setItem("recommendation", JSON.stringify(d));
    console.log(
      `Init recommendation data fetched: ${new Date().toLocaleTimeString()}`
    );
    return d;
  },
  fetchDataPeriodicaly() {
    const fetchRecommendation = (token: string) => {
      const minutes = new Date().getMinutes();
      console.log(`Checking time: ${minutes}`);
      if (minutes === 30 || minutes === 0) {
        service.fetchRecommendation(token).then((c) => {
          localStorage.setItem("recommendation", JSON.stringify(c));
          console.log(
            `Current recommendation data fetched: ${new Date().toLocaleTimeString()}`
          );
        });
      }
    };
    const fetchRecommendationInterval = setInterval(
      fetchRecommendation,
      60 * 1000
    );

    return () => {
      clearInterval(fetchRecommendationInterval);
    };
  },
};

export default RecommendationFetcher;
