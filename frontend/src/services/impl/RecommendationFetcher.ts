import RecommendationImplementation from "./RecommendationImplementation";
const service = new RecommendationImplementation();

const RecommendationFetcher = {
  async initRecommendationFetch() {
    const d = await service.fetchRecommendation();
    localStorage.setItem("recommendation", JSON.stringify(d));
    console.log(
      `Init recommendation data fetched: ${new Date().toLocaleTimeString()}`
    );
    return d;
  },
  fetchDataPeriodicaly() {
    const fetchRecommendation = () => {
      const minutes = new Date().getMinutes();
      console.log(`Checking time: ${minutes}`);
      if (minutes === 30 || minutes === 0) {
        service.fetchRecommendation().then((c) => {
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
