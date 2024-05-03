import React from "react";
import styles from "./WeatherHourlyForecast.module.css";
import { FaRegClock } from "react-icons/fa";
import HourlyForecast from "../../../../models/HourlyForecast";
import WeatherEntry from "../WeatherEntry/WeatherEntry";

function WeatherHourlyForecast({
  hourlyForecast,
}: {
  hourlyForecast: HourlyForecast[];
}) {
  const timeListEl = (
    <div className="d-flex flex-row container-fluid p-0 column-gap-3 h-100">
      {hourlyForecast.map((item, index) => <WeatherEntry key={index} item={item}/>)}
    </div>
  );

  return (
    <>
      <div className={`${styles.weatherData} d-flex flex-column gap-3`} >
        <div className="weather-data-header d-flex flex-row gap-3 align-items-center h-25">
          <div className={`${styles.iconWrapper}`}>
            <FaRegClock
              style={{
                width: "100%",
                height: "100%",
                fill: "var(--color-secondary)",
              }}
            />
          </div>
          <h5>Hourly forecast</h5>
        </div>
        <div className="h-75">{timeListEl}</div>
      </div>
    </>
  );
}

export default WeatherHourlyForecast;
