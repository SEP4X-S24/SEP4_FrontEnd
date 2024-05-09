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
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
      mode: 'no-cors'
    };


    return fetch(
      "https://weatherstation4dev.azurewebsites.net/api/GetDefaultData", requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data ${response}`);
        }
        return response.text();
      })
      .then((data) => {
        const jsonData = JSON.parse(data);
        console.log(jsonData)
        const currentWeather: CurrentWeather = {
          currentTemperature: jsonData.Value.CurrentTemp,
          location: jsonData.Value.Location,
          currentWeather: jsonData.Value.WeatherState,
          timeChecked: `${format(
            new Date(jsonData.Value.TimeChecked),
            "EEEE dd.MM HH:mm"
          )}`,
          humidity: jsonData.Value.Humidity,
        };

        return currentWeather;
      })
      .catch((error) => {
        console.error("Error fetching CurrentWeather data:", error);
        return this.dummyService.fetchCurrentWeather();
      });
  }
}
