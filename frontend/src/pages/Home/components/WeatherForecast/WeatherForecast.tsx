import React from "react";
import styles from "./WeatherForecast.module.css";
import WeatherEntry from "../WeatherEntry/WeatherEntry";
import BasicForecast from "../../../../models/BasicForecast";
import { IconType } from "react-icons";

function WeatherForecast({
  header,
  HeaderIcon,
  forecast,
}: {
  forecast: BasicForecast[],
  header: string,
  HeaderIcon: IconType
  
}) {
  const timeListEl = (
    <div className="d-flex flex-row container-fluid p-0 column-gap-3 h-100 overflow-auto">
      {forecast.map((item, index) => <WeatherEntry key={index} item={item}/>)}
    </div>
  );

  return (
    <>
      <div className={`${styles.weatherData} d-flex flex-column gap-3`} >
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

export default WeatherForecast;
