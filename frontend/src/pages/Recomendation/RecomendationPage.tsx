import React from "react";
import { useAuth } from "../../services/auth/AuthContext";
import WeatherOutfitBanner from "./components/WeatherOutfitBanner/WeatherOutfitBanner";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import ItemCollection from "./components/ItemCollection/ItemCollection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function RecomendationPage() {
  const { isAuthenticated: authenticated } = useAuth();
  if (!authenticated) {
    return <div>You are not Authentificated</div>;
  }

  return (
    <div className="app">
      <Header />
      <WeatherOutfitBanner />
      <WeatherInfo />
      <ItemCollection />
      <Footer />
      {/* Other components will follow */}
    </div>
  );
}

export default RecomendationPage;
