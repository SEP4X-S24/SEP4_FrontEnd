import React from "react";
import classes from "./HomeAbout.module.css";
import { About } from "../../services/DemoDataHome";

function HomeAbout({ about }: { about: About }) {
  return (
    <div className={classes.homeAbout}>
      HomeAbout Component
      <div>{about.currentTemperature}</div>
      <div>{about.location}</div>
      <div>{about.timeChecked}</div>
      <div>{about.currentWeather}</div>
    </div>
  );
}

export default HomeAbout;
