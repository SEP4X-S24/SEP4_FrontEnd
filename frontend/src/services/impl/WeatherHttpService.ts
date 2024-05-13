import { format, parseISO } from "date-fns";
import CurrentWeather from "../../models/CurrentWeather";
import DailyForecast from "../../models/DailyForecast";
import HourlyForecast from "../../models/HourlyForecast";
import WeatherService from "../WeatherService";
import DummyWeatherService from "./DummyWeatherService";
import { fetchWeatherApi } from "openmeteo";
import BasicForecast from "../../models/BasicForecast";
import axios from "axios";
import weatherIconMapper from "../../utils/WeatherIconMapper";

export default class WeatherHttpService implements WeatherService {
  private dummyService: WeatherService = new DummyWeatherService();

  async fetchWeatherHourlyForecast(): Promise<HourlyForecast[]> {
    const params = {
      latitude: 55.8607,
      longitude: 9.8503,
      hourly: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
        "wind_speed_10m",
        "wind_direction_10m",
      ],
      timezone: "Europe/Berlin",
      forecast_days: 1,
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();

    const hourly = response.hourly()!;

    const weatherData = {
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        )
          .filter(
            (t) =>
              new Date((t + utcOffsetSeconds) * 1000).getTime() >
              new Date().getTime()
          )
          .map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
        apparentTemperature: hourly.variables(2)!.valuesArray()!,
        weatherCode: hourly.variables(3)?.valuesArray()!,
        windSpeed10m: hourly.variables(4)!.valuesArray()!,
        windDirection10m: hourly.variables(5)!.valuesArray()!,
      },
    };

    const hourlyForecast: BasicForecast[] = [];

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      hourlyForecast.push({
        temperature: weatherData.hourly.temperature2m[i],
        time: format(weatherData.hourly.time[i], "hh:mm"),
        weatherState: weatherIconMapper.get(weatherData.hourly.weatherCode[i])?.description!
      });
    }

    return this.dummyService.fetchWeatherHourlyForecast();
  }

  fetchWeatherDailyForecast(): Promise<DailyForecast[]> {
    throw new Error("Method not implemented.");
  }


  async fetchCurrentWeather(): Promise<CurrentWeather> {
    try {
      const response = await axios.get("https://weatherstation4dev.azurewebsites.net/api/GetDefaultData");
      const jsonData = response.data;
      console.log(jsonData);
      const lastIndex: number = jsonData.Value.length - 1
      console.log(jsonData.Value[lastIndex].Light);
      const currentWeather: CurrentWeather = {
        temperature: jsonData.Value[lastIndex].Temperature,
        location: "Horsens",
        weatherState: jsonData.Value[lastIndex].WeatherState,
        time: `${format(
          new Date(parseISO(jsonData.Value[lastIndex].Time)),
          "EEEE dd.MM HH:mm"
        )}`,
        humidity: jsonData.Value[lastIndex].Humidity,
        light: jsonData.Value[lastIndex].Light
      };

      return currentWeather;
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
      return this.dummyService.fetchCurrentWeather();
    }
  }
}