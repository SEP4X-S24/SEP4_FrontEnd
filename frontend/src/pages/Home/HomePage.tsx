import { useEffect, useState } from "react";
import CurrentWeatherComponent from "./components/CurrentWeather/CurrentWeather";
import "./HomePage.css";
import CurrentWeather from "../../models/CurrentWeather";
import HourlyForecast from "../../models/HourlyForecast";
import DummyWeatherService from "../../services/impl/DummyWeatherService";
import DailyForecast from "../../models/DailyForecast";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { FaRegCalendar, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Humidity from "./components/Humidity/Humidity";
import Wind from "./components/Wind/Wind";
import ImmediateUpdateButtonMobileVersion from "../../components/ImmediateUpdateButtonMobileVersion/ImmediateUpdateButtonMobileVersion.module";

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

  const [isCurrentWeatherRequested, setIsCurrentWeatherRequested] =
    useState(false);

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
    <div className="weather-root d-flex align-items-center justify-content-center">
      <div className="weather-container container-fluid row gap">
        <div className="current-weather-container col-lg-4 p-0 flex-lg-wrap">
          <CurrentWeatherComponent
            currentWeather={currentWeather}
            isCurrentWeatherRequested={isCurrentWeatherRequested}
            setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
          />
        </div>
        <div className="col-lg p-0">
          <div className="d-flex flex-column gap">
            <div>
              <WeatherForecast
                header="Hourly forecast"
                HeaderIcon={FaRegClock}
                forecast={hourlyForecast}
              />
            </div>
            <div>
              <WeatherForecast
                header="Daily forecast"
                HeaderIcon={FaRegCalendarAlt}
                forecast={dailyForecast}
              />
            </div>
            <div className="d-flex justify-content-between gap-4 weather-right-row">
              <Humidity value={currentWeather.humidity!} />
              <Wind value={currentWeather.windSpeed!} direction={100} />
            </div>
          </div>
        </div>
        <ImmediateUpdateButtonMobileVersion
          isCurrentWeatherRequested={isCurrentWeatherRequested}
          setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
        />
      </div>
    </div>
  );
}

export default HomePage;
