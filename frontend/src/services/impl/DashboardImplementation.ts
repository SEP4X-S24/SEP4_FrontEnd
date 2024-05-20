import DashboardObj from "../../models/Dashboard/DashboardObj";
import DashboardService from "../DashboardService";
import axios from "axios";
import { fetchWeatherApi } from "openmeteo";
import { each } from "chart.js/dist/helpers/helpers.core";
import Cookies from "js-cookie";

interface WeatherData {
  Id: number;
  WeatherState: string;
  Temperature: number;
  Light: number;
  Humidity: number;
  Time: string;
}

const apiURL = {
  Week: "https://weatherstation4dev.azurewebsites.net/api/GetWeatherStatistics/Week",
  Month:
    "https://weatherstation4dev.azurewebsites.net/api/GetWeatherStatistics/Month",
  Year: "https://weatherstation4dev.azurewebsites.net/api/GetWeatherStatistics/Year",
};

export default class implements DashboardService {
  async fetchDataFor_12Month(): Promise<DashboardObj> {
    const token = Cookies.get("jwtToken");

    try {
      const response = await axios.get(apiURL.Year, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = response.data;
      const dashboardData: DashboardObj = {
        summary: jsonData.summary,
        averageHumidity: jsonData.averageHumidity,
        temperatureGrath: jsonData.temperatureGraph,
        weatherStateSummary: jsonData.weatherStateSummary,
      };
      console.log("Data for Year");
      console.log(dashboardData);
      return dashboardData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async fetchDataFor_30Day(): Promise<DashboardObj> {
    const token = Cookies.get("jwtToken");
    try {
      const response = await axios.get(apiURL.Month, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = response.data;
      const dashboardData: DashboardObj = {
        summary: jsonData.summary,
        averageHumidity: jsonData.averageHumidity,
        temperatureGrath: jsonData.temperatureGraph,
        weatherStateSummary: jsonData.weatherStateSummary,
      };
      console.log("Data for Month");
      console.log(dashboardData);
      return dashboardData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Ensure the promise is rejected with the error
    }
  }

  async fetchDataFor_7Day(): Promise<DashboardObj> {
    const token = Cookies.get("jwtToken");

    try {
      const response = await axios.get(apiURL.Week, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = response.data;
      const dashboardData: DashboardObj = {
        summary: jsonData.summary,
        averageHumidity: jsonData.averageHumidity,
        temperatureGrath: jsonData.temperatureGraph,
        weatherStateSummary: jsonData.weatherStateSummary,
      };
      console.log("Data for Week");
      console.log(dashboardData);
      return dashboardData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Ensure the promise is rejected with the error
    }
  }
}
