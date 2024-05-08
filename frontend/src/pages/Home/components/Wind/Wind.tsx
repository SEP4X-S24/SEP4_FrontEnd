import React from "react";
import windIcon from "../../../../images/wind-direction.png";
import styles from "./Wind.module.css";

function Wind({
  speed: speed,
  direction,
}: {
  speed: number;
  direction: number;
}) {
  const rotationAngle = `rotate(${direction}deg)`;

  return (
    <div className="humidity container row m-0 d-flex">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center p-0">
        <h5>Wind</h5>
        <h3>{speed}m/s</h3>
      </div>
      <div className="col d-flex flex-column justify-content-center align-content-center align-items-center p-0">
        <div className={styles.windIcon} style={{ transform: rotationAngle }}>
          <img src={windIcon} alt="WindIcon" />
        </div>
      </div>
    </div>
  );
}

export default Wind;
