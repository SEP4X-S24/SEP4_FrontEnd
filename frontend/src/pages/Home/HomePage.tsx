import { useEffect, useRef, useState } from "react";
import CurrentWeatherComponent from "./components/CurrentWeather/CurrentWeather";
import "./HomePage.css";
import CurrentWeather from "../../models/CurrentWeather";
import HourlyForecast from "../../models/HourlyForecast";
import DailyForecast from "../../models/DailyForecast";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Humidity from "./components/Humidity/Humidity";
import ImmediateUpdateButtonMobileVersion from "../../components/ImmediateUpdateButtonMobileVersion/ImmediateUpdateButtonMobileVersion.module";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LightComponent from "./components/Light/LightComponent";
import weatherFetcher from "../../services/impl/WeatherFetcher";
import WeatherHttpService from "../../services/impl/WeatherHttpService";
import { useAuth } from "../../services/auth/AuthContext";
import WeatherService from "../../services/Interfaces/WeatherService";

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
  const isWeatherLoadedRef = useRef(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const service: WeatherService = new WeatherHttpService();

    const fetchWeatherData = async () => {
      const cachedWeather = localStorage.getItem("current_weather");
      if (cachedWeather) {
        setCurrentWeather(JSON.parse(cachedWeather));
      } else {
        if (!isWeatherLoadedRef.current) {
          const fetchedWeather = await weatherFetcher.initCurrentWeatherFetch();
          setCurrentWeather(fetchedWeather);
        }
      }
    };

    fetchWeatherData();

    service.fetchWeatherHourlyForecast().then((h) => setHourlyForecast(h));
    service.fetchWeatherDailyForecast().then((d) => setDailyForecast(d));
    isWeatherLoadedRef.current = true;
  }, []);

  if (!currentWeather || !hourlyForecast || !dailyForecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <div className="weather-root d-flex align-items-center justify-content-center">
          <div className="weather-container container-fluid row gap">
            <div className="current-weather-container col-lg-4 p-0 flex-lg-wrap">
              <CurrentWeatherComponent
                currentWeather={currentWeather}
                isCurrentWeatherRequested={isCurrentWeatherRequested}
                setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
                setCurrentWeather={(weather) => setCurrentWeather(weather)}
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
                  <LightComponent value={currentWeather.light!} />
                </div>
              </div>
            </div>
            {isAuthenticated ? (
              <ImmediateUpdateButtonMobileVersion
                isCurrentWeatherRequested={isCurrentWeatherRequested}
                setIsCurrentWeatherRequested={setIsCurrentWeatherRequested}
                setCurrentWeather={(weather) => setCurrentWeather(weather)}
              />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
