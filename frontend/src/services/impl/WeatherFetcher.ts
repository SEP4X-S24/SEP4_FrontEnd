// weatherFetcher.js

import WeatherHttpService from "../../services/impl/WeatherHttpService";

const fetchCurrentWeatherData = () => {
  const service = new WeatherHttpService();
  service.fetchCurrentWeather().then((c) => {
    localStorage.setItem("current_weather", JSON.stringify(c));
    console.log(
      `Init weather data fetched: ${new Date().toLocaleTimeString()}`
    );
  });

  const fetchCurrentWeather = () => {
    const minutes = new Date().getMinutes();
    console.log(`Checking time: ${minutes}`);
    if (minutes === 30 || minutes === 0) {
      service.fetchCurrentWeather().then((c) => {
        localStorage.setItem("current_weather", JSON.stringify(c));
        console.log(
          `Current weather data fetched: ${new Date().toLocaleTimeString()}`
        );
      });
    }
  };

  // Fetch current weather initially
  fetchCurrentWeather();

  const fetchCurrentWeatherInterval = setInterval(
    fetchCurrentWeather,
    60 * 1000
  );

  return () => {
    clearInterval(fetchCurrentWeatherInterval);
  };
};

export default fetchCurrentWeatherData;
