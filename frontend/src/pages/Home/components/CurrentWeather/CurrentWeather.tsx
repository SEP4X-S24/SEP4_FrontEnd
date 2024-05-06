import "./CurrentWeather.css";
import * as Icon from "react-icons/wi";
import COLORS from "../../../../utils/COLORS";
import CurrentWeather from "../../../../models/CurrentWeather";

function CurrentWeatherComponent({currentWeather}:{currentWeather: CurrentWeather}) {

  return (
    <div
      className="about d-flex flex-column justify-content-between align-items-center"
    >
      <div className="general-data d-flex flex-column justify-content-center align-items-center">
        <h2>{currentWeather.location}</h2>
        <h3 className="my-3">{currentWeather.currentTemperature}°</h3>
        <h5>{currentWeather.currentWeather}</h5>
      </div>
      <div className="weather-icon-container">
        <Icon.WiDayCloudy
          color={COLORS.secondary}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="details-data d-flex flex-row justify-content-between">
        {/* <div>
          <h5>Humidity: {currentWeather.humidity}%</h5>
          <h5>Wind speed: {currentWeather.windSpeed}km/h</h5>
        </div> */}
        <div className="location d-flex align-items-end">
          <label>{currentWeather.timeChecked}</label>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherComponent;
