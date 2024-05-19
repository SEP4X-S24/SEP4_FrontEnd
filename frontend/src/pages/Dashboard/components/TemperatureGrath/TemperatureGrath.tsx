import React, { useEffect, useRef } from "react";
import {
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto"; // Import Chart.js auto registration
import TemperatureGrathObject from "../../../../models/Dashboard/TemperatureGrathObject";
import "./TemperatureGraph.css"; // Import the CSS file

// Register necessary Chart.js components
Chart.register(
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

function TemperatureGraph({
  temperatureGrathData,
}: {
  temperatureGrathData: TemperatureGrathObject[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const labels = temperatureGrathData.map((item) => item.date);
    const minTemperatures = temperatureGrathData.map(
      (item) => item.minTemperature
    );
    const maxTemperatures = temperatureGrathData.map(
      (item) => item.maxTemperature
    );

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Min Temperature",
            data: minTemperatures,
            borderColor: "blue",
            borderWidth: 1,
            fill: false,
          },
          {
            label: "Max Temperature",
            data: maxTemperatures,
            borderColor: "purple",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false, // Hide vertical grid lines
            },
            ticks: {
              color: "black", // Color of X-axis labels
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            grid: {
              color: (context) =>
                context.tick.value === 0 ? "black" : "rgba(0,0,0,0.1)", // Color the grid lines differently
            },
            ticks: {
              stepSize: 10, // Set the step size for ticks
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [temperatureGrathData]);

  return (
    <div className="temperature-graph-container">
      <h2>Temperature Graph</h2>
      <div className="temperature-graph-canvas">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default TemperatureGraph;
