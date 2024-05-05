import { useEffect, useState } from "react";
import CurrentWeatherComponent from "./components/CurrentWeather/CurrentWeather";
import "./HomePage.css";
import CurrentWeather from "../../models/CurrentWeather";
import HourlyForecast from "../../models/HourlyForecast";
import DummyWeatherService from "./services/DummyWeatherService";
import DailyForecast from "../../models/DailyForecast";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { FaRegCalendar, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Humidity from "./Humidity/Humidity";

function HomePage() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[] | null>(
    null
  );
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[] | null>(
    null
  );

  useEffect(() => {
    const dummyService = new DummyWeatherService();

    dummyService.fetchCurrentWeather().then((c) => setCurrentWeather(c));
    dummyService.fetchWeatherHourlyForecast().then((h) => setHourlyForecast(h));
    dummyService.fetchWeatherDailyForecast().then((d) => setDailyForecast(d));
  }, []);

  if (!currentWeather || !hourlyForecast || !dailyForecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container-fluid weather-root d-flex align-items-center justify-content-center">
      <div className="weather-container container-fluid row gap-4">
        <div className="col-lg-4 p-0">
          <CurrentWeatherComponent currentWeather={currentWeather} />
        </div>
        <div className="col-lg p-0 d-flex flex-column justify-content-between gap-3">
          <div className="weather-right-row">
            <WeatherForecast
              header="Hourly forecast"
              HeaderIcon={FaRegClock}
              forecast={hourlyForecast}
            />
          </div>

          <div className="weather-right-row">
            <WeatherForecast
              header="Daily forecast"
              HeaderIcon={FaRegCalendarAlt}
              forecast={dailyForecast}
            />
          </div>

          <div className="d-flex flex-row justify-content-between gap-4 weather-right-row">
            <Humidity value={35}></Humidity>
            <Humidity value={61}></Humidity>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
