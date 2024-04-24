import React from "react";
import classes from "./HomeWeatherData.module.css";
import { WeatherData } from "../../services/DemoDataHome";

function HomeWeatherData({ weatherData }: { weatherData: WeatherData }) {
  return (
    <div className={classes.weatherData}>
      HomeWeatherData
      <ul>
        {weatherData.hourlyForecast.map((item) => (
          <li>
            <div>{item.time}</div>
            <div>{item.temperature} 'C</div>
            <div>{item.windSpeed} m/s</div>
            <div>{item.rainChance}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeWeatherData;
