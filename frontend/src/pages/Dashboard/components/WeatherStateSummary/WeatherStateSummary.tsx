import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./WeatherStateSummary.css";

const WeatherStateSummary: React.FC = () => {
  // Dummy data for the chart
  const data = {
    labels: ["Rainy", "Cloudy", "Sunny"],
    datasets: [
      {
        data: [942, 251, 452],
        backgroundColor: ["#6A5ACD", "#FF6347", "#FFD700"],
        hoverBackgroundColor: ["#483D8B", "#FF4500", "#FFA500"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="weather-summary-container">
      <div className="chart-header">
        <h2>Weather State Summary</h2>
      </div>
      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />
      </div>
      <div className="weather-summary-details">
        <div className="weather-summary-item">
          <span
            className="weather-summary-color"
            style={{ backgroundColor: "#6A5ACD" }}
          ></span>
          <span>Rainy</span>
          <span>942</span>
        </div>
        <div className="weather-summary-item">
          <span
            className="weather-summary-color"
            style={{ backgroundColor: "#FF6347" }}
          ></span>
          <span>Cloudy</span>
          <span>25</span>
        </div>
        <div className="weather-summary-item">
          <span
            className="weather-summary-color"
            style={{ backgroundColor: "#FFD700" }}
          ></span>
          <span>Sunny</span>
          <span>2452</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherStateSummary;
