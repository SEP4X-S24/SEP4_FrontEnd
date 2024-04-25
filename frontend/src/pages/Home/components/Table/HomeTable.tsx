import React from "react";
import styles from "./HomeTable.module.css";

interface ForecastSummary {
  date: Date;
  minTemperature: number;
  maxTemperature: number;
  humidity: number;
  rain: string;
}

interface TableProps {
  forecastSummary: ForecastSummary[];
}

const HomeTable: React.FC<{ table: TableProps }> = ({ table }) => {
  return (
    <div>
      <h1 className={styles.header}>Forecast Summary</h1>
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
                <img src={entry.rain} alt="Weather Icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
