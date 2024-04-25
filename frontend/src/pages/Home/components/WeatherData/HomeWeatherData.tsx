import React from "react";
import classes from "./HomeWeatherData.module.css";
import { WeatherData } from "../../services/DemoDataHome";
import * as WeatherIcon from "react-icons/wi";
import { COLORS } from "../../../../styles/COLORS";
import { Slider, Button } from "@mui/base";

function HomeWeatherData({ weatherData }: { weatherData: WeatherData }) {
  const timeListEl = (
    <div className="time-entries d-flex flex-row container-fluid">
      {weatherData.hourlyForecast.map((item) => (
        <div className="time-entry d-flex flex-column col text-center m-2 fw-bolder">
          <label>{item.time.split(" ")[0]}</label>
          <label>{item.time.split(" ")[1]}</label>
        </div>
      ))}
    </div>
  );

  const weatherListEl = (
    <div className="weather-entries d-flex container-fluid justify-content-center">
      {weatherData.hourlyForecast.map((item) => (
        <div className="weather-entry d-flex col flex-column text-center m-2 justify-content-center">
          <label>
            <b>{item.temperature}</b>℃
          </label>
          <label>{item.windSpeed} m/s</label>
          <WeatherIcon.WiDayCloudy size={45} color={COLORS().secondary} />
          <label>{item.rainChance} %</label>
        </div>
      ))}
      
    </div>
    
  );

  return (
    <>
      <div className={classes.weatherData}>
      {timeListEl}
      {weatherListEl}
    </div>
    </>
    
    
  );
}

export default HomeWeatherData;
