import "./CurrentWeather.css";
import * as WiIcon from "react-icons/wi";
import * as FaIcon from "react-icons/fa6";
import COLORS from "../../../../utils/COLORS";
import CurrentWeather from "../../../../models/CurrentWeather";
import { useState } from "react";
import { addMinutes } from "date-fns";
import Countdown from "react-countdown";

function CurrentWeatherComponent({
  currentWeather,
}: {
  currentWeather: CurrentWeather;
}) {
  const [isImmediateUpdateRequested, setImmmediateUpdateRequest] =
    useState(false);

  function requestImmediateUpdate() {
    setImmmediateUpdateRequest(!isImmediateUpdateRequested);
  }


  return (
    <div className="current-weather d-flex flex-column justify-content-between align-items-center">
      <div className="general-data d-flex flex-column justify-content-center align-items-center">
        <h2>{currentWeather.location}</h2>
        <h3 className="my-3">{currentWeather.currentTemperature}°</h3>
        <h5>{currentWeather.currentWeather}</h5>
      </div>
      <div className="weather-icon-container">
        <WiIcon.WiDayCloudy
          color={COLORS.secondary}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="details-data d-flex flex-row justify-content-between">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <label>{currentWeather.timeChecked}</label>
          <div>
            <div className="update-icon-wrapper">
              <FaIcon.FaArrowRotateRight
                style={{
                  width: "100%",
                  height: "100%",
                  fill: isImmediateUpdateRequested ? "#999999" : "white",
                }}
                onClick={requestImmediateUpdate}
              />
            </div>
            {isImmediateUpdateRequested ? (
              <div className="timer">
                <Countdown
                  date={Date.now() + 11000}
                  renderer={(props) => (
                    <label>{`${props.formatted.minutes}:${props.formatted.seconds}`}</label>
                  )}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherComponent;
