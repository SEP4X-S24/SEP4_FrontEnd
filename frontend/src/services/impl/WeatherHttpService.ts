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
import Cookies from "js-cookie";

export default class WeatherHttpService implements WeatherService {
  
  private dummyService: WeatherService = new DummyWeatherService();

  async fetchWeatherImmediately(token: string): Promise<CurrentWeather> {
    try {
      const response = await axios.get(
        "https://weatherstation4dev.azurewebsites.net/api/GetInstantData", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const jsonData = response.data;
      console.log(jsonData)
      const currentWeather: CurrentWeather = {
        temperature: jsonData.Temperature,
        location: "Horsens",
        weatherState: jsonData.WeatherState,
        time: `${format(
          new Date(parseISO(jsonData.Time)),
          "EEEE dd.MM HH:mm"
        )}`,
        humidity: jsonData.Humidity,
        light: jsonData.Light,
      };

      return currentWeather;
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
      return this.dummyService.fetchCurrentWeather();
    }
  }

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
      timezone: "Europe/Berlin"
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
              new Date(t * 1000).getHours() ===
              new Date().getHours() || new Date(t * 1000).getTime() > new Date().getTime()
          )
          .map((t) => new Date((t) * 1000)),
        temperature2m: hourly.variables(0)!.valuesArray()!,
        relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
        apparentTemperature: hourly.variables(2)!.valuesArray()!,
        weatherCode: hourly.variables(3)?.valuesArray()!,
        windSpeed10m: hourly.variables(4)!.valuesArray()!,
        windDirection10m: hourly.variables(5)!.valuesArray()!,
      },
    };

    const hourlyForecast: BasicForecast[] = [];

    for (let i = 0; i < weatherData.hourly.time.length && i < 7; i++) {
      hourlyForecast.push({
        temperature: Math.round(weatherData.hourly.temperature2m[i]),
        time: format(weatherData.hourly.time[i], "HH:mm"),
        weatherState: weatherIconMapper.get(weatherData.hourly.weatherCode[i])
          ?.description!,
      });
    }

    hourlyForecast[0].time = "Now";

    return hourlyForecast;
  }

  async fetchWeatherDailyForecast(): Promise<DailyForecast[]> {
    const params = {
      latitude: 55.8607,
      longitude: 9.8503,
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "sunrise",
        "sunset",
      ],
      timezone: "Europe/Berlin",
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();

    const daily = response.daily()!;

    const weatherData = {
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        weatherCode: daily.variables(0)!.valuesArray()!,
        temperature2mMax: daily.variables(1)!.valuesArray()!,
        temperature2mMin: daily.variables(2)!.valuesArray()!,
        sunrise: daily.variables(3)!.valuesArray()!,
        sunset: daily.variables(4)!.valuesArray()!,
      },
    };

    const dailyForecast: DailyForecast[] = [];

    for (let i = 0; i < weatherData.daily.time.length && i < 7; i++) {
      dailyForecast.push({
        temperature: NaN,
        maxTemperature: Math.round(weatherData.daily.temperature2mMax[i]),
        minTemperature: Math.round(weatherData.daily.temperature2mMin[i]),
        time: format(weatherData.daily.time[i], "dd.MM"),
        weatherState: weatherIconMapper.get(weatherData.daily.weatherCode[i])
          ?.description!,
      });
    }

    return dailyForecast;
  }

  async fetchCurrentWeather(): Promise<CurrentWeather> {
    try {
      const response = await axios.get(
        "https://weatherstation4dev.azurewebsites.net/api/GetDefaultData"
      );
      const jsonData = response.data;
      console.log(jsonData);
      const lastIndex: number = jsonData.length - 1;
      console.log(jsonData[lastIndex].Light);
      const currentWeather: CurrentWeather = {
        temperature: jsonData[lastIndex].Temperature,
        location: "Horsens",
        weatherState: jsonData[lastIndex].WeatherState,
        time: `${format(
          new Date(parseISO(jsonData[lastIndex].Time)),
          "EEEE dd.MM HH:mm"
        )}`,
        humidity: jsonData[lastIndex].Humidity,
        light: jsonData[lastIndex].Light,
      };

      return currentWeather;
    } catch (error) {
      console.error("Error fetching CurrentWeather data:", error);
      return this.dummyService.fetchCurrentWeather();
    }
  }
}
