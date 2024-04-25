import React from "react";
import styles from "./HomeTable.module.css";
import { Table } from "../../services/DemoDataHome";
import icon from "../../../../images/icon-1.png";

function HomeTable({ table }: { table: Table }) {
  return (
    <div className="container">
      <table className={styles.weatherTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Min Temp</th>
            <th>Max Temp</th>
            <th>Humidity</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {table.forecastSummary.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date.toLocaleDateString()}</td>
              <td>{entry.minTemperature}°C</td>
              <td>{entry.maxTemperature}°C</td>
              <td>{entry.humidity}%</td>
              <td>
                <img src={icon} alt="Weather Icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
