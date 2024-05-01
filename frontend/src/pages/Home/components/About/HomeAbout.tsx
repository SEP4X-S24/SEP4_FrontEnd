import React from "react";
import "./HomeAbout.css";
import { About } from "../../services/DemoDataHome";
import * as Icon from "react-icons/wi";
import { COLORS } from "../../../../styles/COLORS";

function HomeAbout({ about }: { about: About }) {
  const [currentTemperature, setCurrentTemperature] = React.useState(23);
  const [timeChecked, setTimeChecked] = React.useState("Monday, 08:45 AM");
  const [humidity, setHumidity] = React.useState(61); // TODO: pass as parameter
  const [windSpeed, setWindSpeed] = React.useState(8); // TODO: pass as parameter
  const [currentWeather, setCurrentWeather] = React.useState("Partly Cloudy");
  const [location, setLocation] = React.useState("Horsens");

  const handleUpdate = () => {
    setCurrentTemperature(23);
    setTimeChecked("Monday, 08:45 AM");
    setCurrentWeather("Partly Cloudy");
    setLocation("Horsens");
  };

  return (
    <div className="about d-flex flex-column justify-content-between align-items-center">
      <div className="general-data d-flex flex-column justify-content-center align-items-center">
        <h2>{location}</h2>
        <h2 className="my-3">{currentTemperature}°</h2>
        <h5>{currentWeather}</h5>
      </div>
      <Icon.WiDayCloudy size={100} color={COLORS().secondary} />
      <div className="details-data d-flex flex-row justify-content-between">
        <div>
          <h5>Humidity: {humidity}%</h5>
          <h5>Wind speed: {windSpeed}km/h</h5>
        </div>
        <div className="location d-flex align-items-end">
          <label>{timeChecked}</label>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
