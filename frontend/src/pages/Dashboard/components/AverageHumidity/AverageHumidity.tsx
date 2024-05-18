import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./AverageHumidity.css";

const AverageHumidity: React.FC = () => {
  // Dummy data for the chart
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Humidity",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: 20, // Add this line for rounded bar edges
        barThickness: "flex" as const, // Set to 'flex'
        maxBarThickness: 60, // Max bar thickness
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
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="humidity-chart-container">
      <div className="chart-header">
        <h2>Average Humidity</h2>
        <p className="chart-value">
          98,425k <span className="chart-change">+0.4% Than last week</span>
        </p>
      </div>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AverageHumidity;
