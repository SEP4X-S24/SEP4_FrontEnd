import { useEffect, useState } from "react";
import CurrentWeatherComponent from "./components/CurrentWeather/CurrentWeather";
import WeatherHourlyForecast from "./components/WeatherHourlyForecast/WeatherHourlyForecast";
import "./HomePageStyles.css";
import CurrentWeather from "../../models/CurrentWeather";
import HourlyForecast from "../../models/HourlyForecast";
import DummyWeatherService from "./services/DummyWeatherService";

function HomePage() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[] | null>(
    null
  );

  useEffect(() => {
    const dummyService = new DummyWeatherService();

    dummyService.fetchCurrentWeather().then((c) => setCurrentWeather(c));
    dummyService.fetchWeatherHourlyForecast().then((h) => setHourlyForecast(h));
  }, []);

  if (!currentWeather || !hourlyForecast) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container-fluid weather-root d-flex align-items-center justify-content-center">
      <div className="weather-container container-fluid row column-gap-4">
        <div className="col-md-4">
          <CurrentWeatherComponent currentWeather={currentWeather} />
        </div>
        <div className="col-md">
          <WeatherHourlyForecast hourlyForecast={hourlyForecast} />
        </div>
        {/* <HomeSugestion sugestion={demoData.Suggestion} />
        <HomeTable table={demoData.Table} /> */}
      </div>
    </div>
  );
}

export default HomePage;
