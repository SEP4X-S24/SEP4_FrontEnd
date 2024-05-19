import React from "react";
import { FaSun, FaLightbulb, FaThermometerHalf, FaTint } from "react-icons/fa";
import "./Summary.css";
import SummaryObj from "../../../../models/Dashboard/SummaryObj";

function SummaryComponent({ summary }: { summary: SummaryObj }) {
  return (
    <div className="dashboard">
      <div className="stats-cards">
        <div className="stats-card">
          <div className="stats-content">
            <p className="stats-number">{summary.sunnyDays}</p>
            <p className="stats-label">Nr. of Sunny Days</p>
          </div>
          <div className="stats-icon">
            <FaSun />
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-content">
            <p className="stats-number">{summary.averageLight}</p>
            <p className="stats-label">Average Daily Light</p>
          </div>
          <div className="stats-icon">
            <FaLightbulb />
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-content">
            <p className="stats-number">{summary.averageTemperature}</p>
            <p className="stats-label">Average Temperature</p>
          </div>
          <div className="stats-icon">
            <FaThermometerHalf />
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-content">
            <p className="stats-number">{summary.averageHumidity}</p>
            <p className="stats-label">Average Humidity</p>
          </div>
          <div className="stats-icon">
            <FaTint />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryComponent;
