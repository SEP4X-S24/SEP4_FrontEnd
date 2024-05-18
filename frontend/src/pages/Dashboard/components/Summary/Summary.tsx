import React from "react";
import { FaSun, FaLightbulb, FaThermometerHalf, FaTint } from "react-icons/fa";
import "./Summary.css";

const statsData = [
  {
    value: "89,935",
    label: "Nr. of Sunny Days",
    change: "↑ 10.2 +1.01% this week",
    icon: <FaSun />,
  },
  {
    value: "23,283.5",
    label: "Average Daily Light",
    change: "↑ 3.1 +0.49% this week",
    icon: <FaLightbulb />,
  },
  {
    value: "46,827",
    label: "Average Temperature",
    change: "↓ 2.56 -0.91% this week",
    icon: <FaThermometerHalf />,
  },
  {
    value: "124,854",
    label: "Average Humidity",
    change: "↑ 7.2 +1.51% this week",
    icon: <FaTint />,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="stats-cards">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-card">
            <div className="stats-content">
              <p className="stats-number">{stat.value}</p>
              <p className="stats-label">{stat.label}</p>
              <p className="stats-change">{stat.change}</p>
            </div>
            <div className="stats-icon">{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
