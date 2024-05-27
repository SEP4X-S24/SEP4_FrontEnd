import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import TemperatureGrathObject from "../../../../models/Dashboard/TemperatureGrathObject";
import "./TemperatureGraph.css";

interface TemperatureGraphProps {
  temperatureGraph: TemperatureGrathObject[];
}

const TemperatureGraph: React.FC<TemperatureGraphProps> = ({
  temperatureGraph = [],
}) => {
  const labels = temperatureGraph.map((item) => item.date);
  const minTemperatures = temperatureGraph.map((item) => item.minTemperature);
  const maxTemperatures = temperatureGraph.map((item) => item.maxTemperature);

  const data = {
    labels,
    datasets: [
      {
        label: "Min Temperature",
        data: minTemperatures,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Max Temperature",
        data: maxTemperatures,
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Ensure the position is correctly typed
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          color: (context: { tick: { value: number } }) =>
            context.tick.value === 0 ? "black" : "rgba(0,0,0,0.1)",
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="temperature-graph-container">
      <div className="chart-header">
        <h2>Temperature Graph</h2>
      </div>
      <div className="chart-wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TemperatureGraph;
