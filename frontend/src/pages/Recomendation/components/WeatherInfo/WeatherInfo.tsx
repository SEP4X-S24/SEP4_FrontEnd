import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import * as Icon from "react-icons/wi";
import * as Icons from "react-icons/wi";
import DummyWeatherService from "../../../../services/impl/DummyWeatherService";

const WeatherInfo: React.FC = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    weatherState: "",
    humidity: 0,
    windSpeed: 0,
  });

  useEffect(() => {
    const weatherService = new DummyWeatherService();
    weatherService.fetchWeatherHourlyForecast().then((hourlyForecast) => {
      if (hourlyForecast && hourlyForecast.length > 0) {
        const currentWeather = hourlyForecast[0]; // Assuming the first item is the current weather
        setWeather({
          temperature: currentWeather.temperature,
          weatherState: currentWeather.weatherState,
          humidity: 56, // Assuming a constant for demonstration
          windSpeed: 56, // Assuming a constant for demonstration
        });
      }
    });
  }, []);

  // Dynamic icon retrieval with type assertion
  const WeatherIcon = weather.weatherState
    ? (Icons as any)[`Wi${weather.weatherState}`]
    : Icons.WiDaySunny;

  return (
    <div className="weather-info-container">
      <div className="weather-detail">
        {WeatherIcon ? (
          <WeatherIcon size={50} />
        ) : (
          <Icons.WiDaySunny size={50} />
        )}
        <div className="weather-detail">
          <span>{weather.weatherState || "Clear"}</span>{" "}
          {/* Default text if state is undefined */}
        </div>
      </div>
      <div className="weather-detail">
        <span className="weather-value">{weather.temperature}°</span>
        <span className="weather-label">Temperature</span>
      </div>
      <div className="weather-detail">
        <span className="weather-value">{weather.humidity}%</span>
        <span className="weather-label">Humidity</span>
      </div>
      <div className="weather-detail">
        <span className="weather-value">{weather.windSpeed}m/s</span>
        <span className="weather-label">Wind</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
