import React from "react";
import classes from "./HomeAbout.module.css";
import { About } from "../../services/DemoDataHome";
import icon from "../../../../images/icon-1.png";

function HomeAbout({ about }: { about: About }) {
  const [currentTemperature, setCurrentTemperature] = React.useState(23);
  const [timeChecked, setTimeChecked] = React.useState("Monday, 08:45 AM");
  const [currentWeather, setCurrentWeather] = React.useState("Partly Cloudy");
  const [location, setLocation] = React.useState("Horsens"

  );

  const handleUpdate = () => {
    setCurrentTemperature(23);
    setTimeChecked("Monday, 08:45 AM");
    setCurrentWeather("Partly Cloudy");
    setLocation("Horsens");
  }

  return (
    <div className={classes.About}>
      <div className={classes.header}>
        <div className={classes.About_current_temperature}>
          <h3 className={classes.current_temperature}>{currentTemperature}°C</h3>
        </div>
        <div className={classes.About_current_weather}>
          <div className={classes.current_weather_icon}>
            <img src={icon} alt="" className={classes.icon} />
          </div>
          <div className={classes.current_weather_block}>
            <p className={classes.current_weather_time}>{timeChecked}</p>
            <p className={classes.current_weather}>{currentWeather}</p>
          </div>
        </div>
      </div>
      <div className={classes.about_body}>
        <h1 className={classes.location}>
          {location}
        </h1>
      </div>
      {/* <button onClick={handleUpdate}>Update</button> */}
    </div>

  );
}

export default HomeAbout;
