import React from "react";
import "./WeatherOutfitBanner.css";

const WeatherOutfitBanner: React.FC = () => {
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
          <span className="tag">Sunny weather</span>
          <span className="tag">Other idea</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherOutfitBanner;
