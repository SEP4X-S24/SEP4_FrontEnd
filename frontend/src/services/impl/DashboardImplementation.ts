import AverageHumidityObj from "../../models/Dashboard/AverageHumidityObj";
import DashboardObj from "../../models/Dashboard/DashboardObj";
import SummaryObj from "../../models/Dashboard/SummaryObj";
import TemperatureGrathObject from "../../models/Dashboard/TemperatureGrathObject";
import WeatherStateObj from "../../models/Dashboard/WeatherStateObj";
import DashboardService from "../DashboardService";
import { subDays, parseISO, isAfter } from "date-fns";
import axios from "axios";
import { fetchWeatherApi } from "openmeteo";

interface WeatherData {
  Id: number;
  WeatherState: string;
  Temperature: number;
  Light: number;
  Humidity: number;
  Time: string;
}

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

  fetchDataFor_7Day(): Promise<DashboardObj> {
    throw new Error("Not implemented Method");
  }

  fetchDataFor_24H(): Promise<DashboardObj> {
    const weatherDataJSON = localStorage.getItem("weatherData");

    if (!weatherDataJSON) {
      console.error("No weather data found in local storage.");
      this.fetchDataFromAPI();
      return Promise.reject("No weather data found in local storage.");
    }

    try {
      const weatherData: WeatherData[] = JSON.parse(weatherDataJSON);
      const now = new Date();
      const last24Hours = subDays(now, 1);

      const filteredData = weatherData.filter((item) =>
        isAfter(parseISO(item.Time), last24Hours)
      );

      // Aggregating data to ensure only one object per hour
      const aggregatedData = this.aggregateHourlyData(filteredData);

      const summary = this.calculateSummary(aggregatedData);
      const temperatureGraph = this.createTemperatureGraph(aggregatedData);
      const averageHumidity = this.calculateAverageHumidity(aggregatedData);
      const weatherStateSummary =
        this.calculateWeatherStateSummary(aggregatedData);

      const dashboardObj: DashboardObj = {
        summary,
        temperaureGrath: temperatureGraph,
        averageHumidity,
        weatherStateSummary,
      };

      return Promise.resolve(dashboardObj);
    } catch (error) {
      console.error("Error parsing weather data from local storage:", error);
      return Promise.reject("Error parsing weather data from local storage.");
    }
  }

  private aggregateHourlyData(data: WeatherData[]): WeatherData[] {
    const hourlyDataMap = new Map<string, WeatherData>();

    data.forEach((item) => {
      const date = new Date(item.Time);
      const hourKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}`;

      if (!hourlyDataMap.has(hourKey)) {
        hourlyDataMap.set(hourKey, item);
      } else {
        const existingItem = hourlyDataMap.get(hourKey)!;
        hourlyDataMap.set(hourKey, {
          ...existingItem,
          Temperature: (existingItem.Temperature + item.Temperature) / 2,
          Light: (existingItem.Light + item.Light) / 2,
          Humidity: (existingItem.Humidity + item.Humidity) / 2,
          Time: item.Time, // This can be any time within the hour
        });
      }
    });

    return Array.from(hourlyDataMap.values());
  }

  private calculateSummary(data: WeatherData[]): SummaryObj {
    const sunnyDays = data.filter(
      (item) => item.WeatherState === "Sunny"
    ).length;
    const averageLight =
      data.reduce((sum, item) => sum + item.Light, 0) / data.length;
    const averageTemperature =
      data.reduce((sum, item) => sum + item.Temperature, 0) / data.length;
    const averageHumidity =
      data.reduce((sum, item) => sum + item.Humidity, 0) / data.length;

    return {
      sunnyDays,
      averageLight,
      averageTemperature,
      averageHumidity,
    };
  }

  private createTemperatureGraph(
    data: WeatherData[]
  ): TemperatureGrathObject[] {
    return data.map((item) => ({
      minTemperature: item.Temperature,
      maxTemperature: item.Temperature,
      date: item.Time,
    }));
  }

  private calculateAverageHumidity(data: WeatherData[]): AverageHumidityObj[] {
    return data.map((item) => ({
      date: item.Time,
      humidity: item.Humidity,
    }));
  }

  private calculateWeatherStateSummary(data: WeatherData[]): WeatherStateObj {
    const rainy = data.filter((item) => item.WeatherState === "Rainy").length;
    const cloudy = data.filter(
      (item) =>
        item.WeatherState === "Cloudy" || item.WeatherState === "Little Cloudy"
    ).length;
    const sunny = data.filter((item) => item.WeatherState === "Sunny").length;

    return {
      rainy,
      cloudy,
      sunny,
    };
  }
}
