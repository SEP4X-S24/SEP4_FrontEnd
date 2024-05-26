import React, { useState, useEffect } from "react";
import "./WeatherOutfitBanner.css";
import DummyWeatherService from "../../../../services/impl/Demo/DummyWeatherService";

const WeatherOutfitBanner: React.FC = () => {
  const [weather, setWeather] = useState({
    weatherState: "",
  });

  useEffect(() => {
    const weatherService = new DummyWeatherService();
    weatherService.fetchWeatherHourlyForecast().then((hourlyForecast) => {
      if (hourlyForecast && hourlyForecast.length > 0) {
        const currentWeather = hourlyForecast[0]; // Assuming the first item is the current weather
        setWeather({
          weatherState: currentWeather.weatherState,
        });
      }
    });
  }, []);

  return (
    <div className="outfit-banner">
      <div className="banner-content">
        <h1>Casual Outfit for Sunny Weather</h1>
        <p>
          Some random text that describes the type of outfit that and AI suggest
          to wear.
        </p>
        <div className="tags">
          <span className="tag">Casual</span>
          <span className="tag">{weather.weatherState || "Clear"}</span>
          <span className="tag">Other idea</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherOutfitBanner;
