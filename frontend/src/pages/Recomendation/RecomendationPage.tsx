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
  const { isAuthenticated, token } = useAuth();
  const [currentRecommendation, setRecommendation] =
    useState<Recommendation | null>(null);
  const isRecommendationLoadedRef = useRef(false);

  useEffect(() => {
    const fetchRecommendationData = async () => {
      const cachedRecommendation = localStorage.getItem("recommendation");
      if (cachedRecommendation) {
        setRecommendation(JSON.parse(cachedRecommendation));
      } else {
        if (!isRecommendationLoadedRef.current) {
          const fetchData = await RecommendationFetcher.initRecommendationFetch(
            token
          );
          setRecommendation(fetchData);
        }
      }
    };
    fetchRecommendationData();
    isRecommendationLoadedRef.current = true;
  }, []);

  return (
    <div className="app">
      <Header />
      <Banner recommendation={currentRecommendation} />
      <WeatherInfo />
      <Footer />
      {/* Other components will follow */}
    </div>
  );
}

export default RecomendationPage;
