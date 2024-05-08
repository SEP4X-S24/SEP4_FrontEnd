import DailyForecast from "../models/DailyForecast";
import HourlyForecast from "../models/HourlyForecast";
import CurrentWeather from "../models/CurrentWeather";
import Suggestion from "../models/Suggestion";

export default interface WeatherService {
  fetchWeatherHourlyForecast(): Promise<HourlyForecast[]>;
  fetchWeatherDailyForecast(): Promise<DailyForecast[]>;
  fetchCurrentWeather(): Promise<CurrentWeather>;
}
