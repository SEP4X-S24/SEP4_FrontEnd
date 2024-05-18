import React from "react";
import styles from "./WeatherForecast.module.css";
import BasicForecast from "../../../../models/BasicForecast";
import { IconType } from "react-icons";
import HourlyForecast from "../../../../models/HourlyForecast";
import DailyForecast from "../../../../models/DailyForecast";
import DailyWeatherEntry from "../DailyWeatherEntry/DailyWeatherEntry";
import WeatherEntry from "../WeatherEntry/WeatherEntry";

function WeatherForecast({
  header,
  HeaderIcon,
  forecast,
}: {
  forecast: BasicForecast[];
  header: string;
  HeaderIcon: IconType;
}) {
  const timeListEl = (
    <div className="d-flex flex-row container-fluid p-0 column-gap-3 h-100 overflow-auto">
      {forecast.map((item, index) => {
        if (isDailyForecast(item)) {
          return <DailyWeatherEntry key={index} item={item} minTemperature={item.minTemperature!} maxTemperature={item.maxTemperature!} />;
        } else {
          return <WeatherEntry key={index} item={item} />;
        }
      })}
    </div>
  );

  return (
    <>
      <div className={`${styles.weatherData} d-flex flex-column gap-3`}>
        <div className="weather-data-header d-flex flex-row gap-3 align-items-center h-25">
          <div className={`${styles.iconWrapper}`}>
            <HeaderIcon
              style={{
                width: "100%",
                height: "100%",
                fill: "var(--color-secondary)",
              }}
            />
          </div>
          <h5>{header}</h5>
        </div>
        <div className="h-75">{timeListEl}</div>
      </div>
    </>
  );
}

function isDailyForecast(obj: any): obj is DailyForecast {
  return obj && obj.maxTemperature !== undefined;
}

function isHourlyForecast(obj: any): obj is HourlyForecast {
  return obj && obj.additionalProperty !== undefined;
}

export default WeatherForecast;
