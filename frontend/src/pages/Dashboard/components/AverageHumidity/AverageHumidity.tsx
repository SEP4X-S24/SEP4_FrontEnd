import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./AverageHumidity.css";
import AverageHumidityObj from "../../../../models/Dashboard/AverageHumidityObj";

function AverageHumidity({
  averageHumidity,
}: {
  averageHumidity: AverageHumidityObj[];
}) {
  const xLabels = averageHumidity.map((item) => item.date);
  const humidityData = averageHumidity.map((item) => item.humidity);

  // Dummy data for the chart
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Humidity",
        data: humidityData,
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
      </div>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default AverageHumidity;
