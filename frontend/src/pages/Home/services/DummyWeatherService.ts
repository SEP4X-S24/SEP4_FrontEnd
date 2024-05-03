import { format } from "date-fns";
import CurrentWeather from "../../../models/CurrentWeather";
import DailyForecast from "../../../models/DailyForecast";
import HourlyForecast from "../../../models/HourlyForecast";
import Suggestion from "../../../models/Suggestion";
import WeatherService from "./WeatherService";

export default class DummyWeatherService implements WeatherService {
  async fetchWeatherHourlyForecast(): Promise<HourlyForecast[]> {
    const hourlyForecast: HourlyForecast[] = [];

    hourlyForecast.push({
      time: `Now`,
      temperature: Math.floor(Math.random() * 10) + 20,
      weatherState: "DayCloudy",
    });

    for (let i = 0; i < 6; i++) {
      hourlyForecast.push({
        time: `${15 + i}:00`,
        temperature: Math.floor(Math.random() * 10) + 20,
        weatherState: "DayCloudy",
      });
    }

    return hourlyForecast;
  }

  async fetchWeatherDailyForecast(): Promise<DailyForecast[]> {
    throw new Error("Method not implemented.");
  }

  async fetchWeatherSuggestion(): Promise<Suggestion> {
    throw new Error("Method not implemented.");
  }

  async fetchCurrentWeather(): Promise<CurrentWeather> {
    return {
      currentTemperature: 28,
      currentWeather: "A little cloudy.",
      location: "Horsens",
      timeChecked: `${format(new Date(), "EEEE dd/MM. HH:mm")}`,
      humidity: 61,
      windSpeed: 6,
    };
  }
}
