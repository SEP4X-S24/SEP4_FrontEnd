import { addDays, format } from "date-fns";
import CurrentWeather from "../../../models/CurrentWeather";
import DailyForecast from "../../../models/DailyForecast";
import HourlyForecast from "../../../models/HourlyForecast";
import Suggestion from "../../../models/Suggestion";
import WeatherService from "./WeatherService";
import weatherIconMapper from "../../../utils/WeatherIconMapper";

export default class DummyWeatherService implements WeatherService {
  async fetchWeatherHourlyForecast(): Promise<HourlyForecast[]> {
    const hourlyForecast: HourlyForecast[] = [];

    hourlyForecast.push({
      time: `Now`,
      temperature: Math.floor(Math.random() * 10) + 20,
      weatherState: this.genRandomWeatherState(),
    });

    for (let i = 0; i < 6; i++) {
      hourlyForecast.push({
        time: `${15 + i}:00`,
        temperature: Math.floor(Math.random() * 10) + 20,
        weatherState: this.genRandomWeatherState(),
      });
    }

    return hourlyForecast;
  }

  async fetchWeatherDailyForecast(): Promise<DailyForecast[]> {
    const dailyForecast: DailyForecast[] = [];
    
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date = addDays(date, i);
  
      dailyForecast.push({
        time: format(date, "dd.MM"),
        temperature: Math.floor(Math.random() * 10) + 20,
        weatherState: this.genRandomWeatherState(),
      });
    }
  
    return dailyForecast;
  }

  async fetchWeatherSuggestion(): Promise<Suggestion> {
    throw new Error("Method not implemented.");
  }

  async fetchCurrentWeather(): Promise<CurrentWeather> {
    return {
      currentTemperature: 28,
      currentWeather: "A little cloudy.",
      location: "Horsens",
      timeChecked: `${format(new Date(), "EEEE dd.MM HH:mm")}`,
      humidity: 61,
      windSpeed: 6,
    };
  }

  private genRandomWeatherState(): string {
    const keys = Array.from(weatherIconMapper.keys());
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
}
