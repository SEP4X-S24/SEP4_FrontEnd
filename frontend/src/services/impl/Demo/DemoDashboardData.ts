import AverageHumidityObj from "../../../models/Dashboard/AverageHumidityObj";
import DashboardObj from "../../../models/Dashboard/DashboardObj";
import SummaryObj from "../../../models/Dashboard/SummaryObj";
import TemperatureGrathObject from "../../../models/Dashboard/TemperatureGrathObject";
import WeatherStateObj from "../../../models/Dashboard/WeatherStateObj";
import DashboardService from "../../DashboardService";
import { subDays, parseISO, isAfter } from "date-fns";
import axios from "axios";
import { fetchWeatherApi } from "openmeteo";
import { each } from "chart.js/dist/helpers/helpers.core";

export default class implements DashboardService {
  fetchDataFor_12Month(): Promise<DashboardObj> {
    const dashboardData: DashboardObj = {
      summary: {
        sunnyDays: 20,
        averageLight: 55,
        averageTemperature: 19,
        averageHumidity: 47,
      },
      temperatureGrath: [
        { date: "Jan", minTemperature: 8, maxTemperature: 21 },
        { date: "Feb", minTemperature: 10, maxTemperature: 20 },
        { date: "Mar", minTemperature: 9, maxTemperature: 22 },
        { date: "Apr", minTemperature: 12, maxTemperature: 24 },
        { date: "May", minTemperature: 7, maxTemperature: 18 },
        { date: "Jun", minTemperature: 11, maxTemperature: 23 },
        { date: "Jul", minTemperature: 13, maxTemperature: 25 },
        { date: "Aug", minTemperature: 6, maxTemperature: 19 },
        { date: "Sep", minTemperature: 10, maxTemperature: 21 },
        { date: "Oct", minTemperature: 8, maxTemperature: 20 },
        { date: "Nov", minTemperature: 9, maxTemperature: 22 },
        { date: "Dec", minTemperature: 7, maxTemperature: 18 },
      ],
      averageHumidity: [
        { date: "Jan", humidity: 85 },
        { date: "Feb", humidity: 80 },
        { date: "Mar", humidity: 70 },
        { date: "Apr", humidity: 75 },
        { date: "May", humidity: 65 },
        { date: "Jun", humidity: 60 },
        { date: "Jul", humidity: 55 },
        { date: "Aug", humidity: 85 },
        { date: "Sep", humidity: 90 },
        { date: "Oct", humidity: 70 },
        { date: "Nov", humidity: 75 },
        { date: "Dec", humidity: 60 },
      ],
      weatherStateSummary: {
        rainy: 243,
        cloudy: 105,
        sunny: 87,
      },
    };
    return Promise.resolve(dashboardData);
  }

  fetchDataFor_30Day(): Promise<DashboardObj> {
    const dashboardData: DashboardObj = {
      summary: {
        sunnyDays: 18,
        averageLight: 43,
        averageTemperature: 17,
        averageHumidity: 54,
      },
      temperatureGrath: [
        { date: "1 May", minTemperature: 15, maxTemperature: 20 },
        { date: "2 May", minTemperature: 10, maxTemperature: 15 },
        { date: "3 May", minTemperature: 10, maxTemperature: 15 },
        { date: "4 May", minTemperature: 10, maxTemperature: 15 },
        { date: "5 May", minTemperature: 10, maxTemperature: 15 },
        { date: "6 May", minTemperature: 10, maxTemperature: 15 },
        { date: "7 May", minTemperature: 10, maxTemperature: 15 },
        { date: "8 May", minTemperature: 10, maxTemperature: 15 },
        { date: "9 May", minTemperature: 10, maxTemperature: 15 },
        { date: "10 May", minTemperature: 10, maxTemperature: 15 },
        { date: "11 May", minTemperature: 10, maxTemperature: 15 },
        { date: "12 May", minTemperature: 10, maxTemperature: 15 },
        { date: "13 May", minTemperature: 10, maxTemperature: 15 },
        { date: "14 May", minTemperature: 10, maxTemperature: 15 },
        { date: "15 May", minTemperature: 10, maxTemperature: 15 },
        { date: "16 May", minTemperature: 20, maxTemperature: 25 },
        { date: "17 May", minTemperature: 10, maxTemperature: 15 },
        { date: "18 May", minTemperature: 10, maxTemperature: 15 },
        { date: "19 May", minTemperature: 10, maxTemperature: 15 },
        { date: "20 May", minTemperature: 10, maxTemperature: 15 },
        { date: "21 May", minTemperature: 10, maxTemperature: 15 },
        { date: "22 May", minTemperature: 10, maxTemperature: 15 },
        { date: "23 May", minTemperature: 10, maxTemperature: 15 },
        { date: "24 May", minTemperature: 10, maxTemperature: 15 },
        { date: "25 May", minTemperature: 10, maxTemperature: 15 },
        { date: "26 May", minTemperature: 10, maxTemperature: 15 },
        { date: "27 May", minTemperature: 10, maxTemperature: 15 },
        { date: "28 May", minTemperature: 10, maxTemperature: 15 },
        { date: "29 May", minTemperature: 10, maxTemperature: 15 },
        { date: "30 May", minTemperature: 10, maxTemperature: 15 },
      ],
      averageHumidity: [
        { date: "1 May", humidity: 85 },
        { date: "2 May", humidity: 85 },
        { date: "3 May", humidity: 85 },
        { date: "4 May", humidity: 85 },
        { date: "5 May", humidity: 85 },
        { date: "6 May", humidity: 85 },
        { date: "7 May", humidity: 85 },
        { date: "8 May", humidity: 85 },
        { date: "9 May", humidity: 85 },
        { date: "10 May", humidity: 85 },
        { date: "11 May", humidity: 85 },
        { date: "12 May", humidity: 85 },
        { date: "13 May", humidity: 85 },
        { date: "14 May", humidity: 85 },
        { date: "15 May", humidity: 85 },
        { date: "16 May", humidity: 85 },
        { date: "17 May", humidity: 85 },
        { date: "18 May", humidity: 85 },
        { date: "19 May", humidity: 85 },
        { date: "20 May", humidity: 85 },
        { date: "21 May", humidity: 85 },
        { date: "22 May", humidity: 85 },
        { date: "23 May", humidity: 85 },
        { date: "24 May", humidity: 85 },
        { date: "25 May", humidity: 85 },
        { date: "26 May", humidity: 85 },
        { date: "27 May", humidity: 85 },
        { date: "28 May", humidity: 85 },
        { date: "29 May", humidity: 85 },
        { date: "30 May", humidity: 85 },
      ],
      weatherStateSummary: {
        rainy: 15,
        cloudy: 16,
        sunny: 8,
      },
    };
    return Promise.resolve(dashboardData);
  }

  fetchDataFor_7Day(): Promise<DashboardObj> {
    const dashboardData: DashboardObj = {
      summary: {
        sunnyDays: 20,
        averageLight: 55,
        averageTemperature: 19,
        averageHumidity: 47,
      },
      temperatureGrath: [
        { date: "7 May", minTemperature: 10, maxTemperature: 15 },
        { date: "8 May", minTemperature: 8, maxTemperature: 13 },
        { date: "9 May", minTemperature: 7, maxTemperature: 12 },
        { date: "10 May", minTemperature: 10, maxTemperature: 18 },
        { date: "11 May", minTemperature: 15, maxTemperature: 25 },
        { date: "12 May", minTemperature: 18, maxTemperature: 28 },
        { date: "13 May", minTemperature: 17, maxTemperature: 26 },
      ],
      averageHumidity: [
        { date: "7 May", humidity: 85 },
        { date: "8 May", humidity: 88 },
        { date: "9 May", humidity: 90 },
        { date: "10 May", humidity: 80 },
        { date: "11 May", humidity: 60 },
        { date: "12 May", humidity: 55 },
        { date: "13 May", humidity: 65 },
      ],
      weatherStateSummary: {
        rainy: 3,
        cloudy: 2,
        sunny: 1,
      },
    };
    return Promise.resolve(dashboardData);
  }
}
