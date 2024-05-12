import React from "react";
import "./WeatherInfo.css";

const WeatherInfo: React.FC = () => {
  return (
    <div className="weather-info-container">
      <div className="weather-detail">
        <img
          src="/icons/cloud-rain.svg"
          alt="Rainy Day"
          className="weather-icon"
        />{" "}
        {/* Ensure you have an icon */}
        <div className="weather-detail-text">
          <span>Rainy Day</span>
        </div>
      </div>
      <div className="weather-detail">
        <span className="weather-value">28°</span>
        <span className="weather-label">Temperature</span>
      </div>
      <div className="weather-detail">
        <span className="weather-value">56%</span>
        <span className="weather-label">Humidity</span>
      </div>
      <div className="weather-detail">
        <span className="weather-value">56m</span>
        <span className="weather-label">Wind</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
