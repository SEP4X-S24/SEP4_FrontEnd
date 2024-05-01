import React from "react";
import styles from "./HomeTable.module.css";
import { Table } from "../../services/DemoDataHome";

function HomeTable({ table }: { table: Table }) {
  return (
    <div className="d-flex justify-content-center">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
