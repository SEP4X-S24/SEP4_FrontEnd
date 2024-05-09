import { format } from "date-fns";
import CurrentWeather from "../../models/CurrentWeather";
import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
import WeatherService from "../WeatherService";
import DummyWeatherService from "./DummyWeatherService";

export default class WeatherHttpService implements WeatherService {
  private dummyService: WeatherService = new DummyWeatherService();

  fetchWeatherHourlyForecast(): Promise<HourlyForecast[]> {
    throw new Error("Method not implemented.");
  }
  fetchWeatherDailyForecast(): Promise<DailyForecast[]> {
    throw new Error("Method not implemented.");
  }
  async fetchCurrentWeather(): Promise<CurrentWeather> {
    return fetch(
      "https://weatherstation4dev.azurewebsites.net/api/GetDefaultData"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data ${response}`);
        }
        return response.json();
      })
      .then((data) => {
        const currentWeather: CurrentWeather = {
          currentTemperature: data.Value.CurrentTemp,
          location: data.Value.Location,
          currentWeather: data.Value.WeatherState,
          timeChecked: `${format(
            new Date(data.Value.TimeChecked),
            "EEEE dd.MM HH:mm"
          )}`,
          humidity: data.Value.Humidity,
        };

        return currentWeather;
      })
      .catch((error) => {
        console.error("Error fetching CurrentWeather data:", error);
        return this.dummyService.fetchCurrentWeather();
      });
  }
}
