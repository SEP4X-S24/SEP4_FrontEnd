import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import WeatherOutfitBanner from "./components/WeatherOutfitBanner/WeatherOutfitBanner";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import ItemCollection from "./components/ItemCollection/ItemCollection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Recommendation from "../../models/Recommendation";
import RecommendationImplementation from "../../services/impl/RecommendationImplementation";
import weatherFetcher from "../../services/impl/WeatherFetcher";
import RecommendationFetcher from "../../services/impl/RecommendationFetcher";

function RecomendationPage() {
  const { isAuthenticated: authenticated } = useAuth();
  const [currentRecomendation, setRecomendation] =
    useState<Recommendation | null>(null);

  useEffect(() => {
    const fetchRecommendationData = async () => {
      const cachedRecommendation = localStorage.getItem("recommendation");
      if (cachedRecommendation) {
        setRecomendation(JSON.parse(cachedRecommendation));
      } else {
        const fetchData = await RecommendationFetcher.initRecommendationFetch();
        setRecomendation(fetchData);
      }
    };
    fetchRecommendationData();
  }, []);

  return (
    <div className="app page-container">
      <Header />
      <Banner recommendation={currentRecomendation} />
      <WeatherInfo />
      <Footer />
      {/* Other components will follow */}
    </div>
  );
}

export default RecomendationPage;
