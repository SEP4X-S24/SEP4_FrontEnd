import React from "react";
import classes from "./HomeTable.module.css";
import { Table } from "../../services/DemoDataHome";

function HomeTable({ table }: { table: Table }) {
  return (
    <div className={classes.table}>
      HomeTable
      <div>Table</div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Min</th>
            <th>Max</th>
            <th>Humidity</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {table.forecastSummary.map((item) => (
            <tr>
              <td>{item.date.getDate()} </td>
              <td>{item.minTemperature} 'C__</td>
              <td>{item.maxTemperature} 'C__</td>
              <td>{item.humidity}%</td>
              <td>{item.rain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
