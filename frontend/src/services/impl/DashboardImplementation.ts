import AverageHumidityObj from "../../models/Dashboard/AverageHumidityObj";
import DashboardObj from "../../models/Dashboard/DashboardObj";
import SummaryObj from "../../models/Dashboard/SummaryObj";
import TemperatureGrathObject from "../../models/Dashboard/TemperatureGrathObject";
import WeatherStateObj from "../../models/Dashboard/WeatherStateObj";
import DashboardService from "../DashboardService";
import { subDays, parseISO, isAfter } from "date-fns";
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
  private async fetchDataFromAPI() {
    try {
      const response = await axios.get(
        "https://weatherstation4dev.azurewebsites.net/api/GetDefaultData"
      );
      const jsonData = response.data;
      console.log(jsonData);
      localStorage.setItem("weatherData", JSON.stringify(jsonData));
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
    }
  }

  fetchDataFor_12Month(): Promise<DashboardObj> {
    throw new Error("Not implemented Method");
  }

  fetchDataFor_30Day(): Promise<DashboardObj> {
    throw new Error("Not implemented Method");
  }

  async fetchDataFor_7Day(): Promise<DashboardObj> {
    const token = Cookies.get("jwtToken"); /// Here I should add token

    try {
      const response = await axios.get(apiURL.Week, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = response.data;
      console.log(jsonData);
      const dashboardData: DashboardObj = {
        summary: jsonData.summary,
        averageHumidity: jsonData.averageHumidity,
        temperatureGrath: jsonData.temperatureGrath,
        weatherStateSummary: jsonData.weatherStateSummary,
      };
      return dashboardData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Ensure the promise is rejected with the error
    }
  }
}
