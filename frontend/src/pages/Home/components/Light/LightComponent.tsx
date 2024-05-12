import React from "react";
import "./LightComponent.css";
import { WiDaySunny } from "react-icons/wi";

function LightComponent({ value }: { value: number }) {
  return (
    <div className="light container row m-0 d-flex justify-content-center align-items-center">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center p-0">
        <h4>Light</h4>
        <h5>{value}</h5>
      </div>
      <div className="lightIcon">
        <WiDaySunny style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default LightComponent;
