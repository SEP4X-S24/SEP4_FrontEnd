import React, { useState, useEffect, useRef } from "react";
import "./WeatherInfo.css";
import * as Icons from "react-icons/wi";
import WeatherHttpService from "../../../../services/impl/WeatherHttpService";
import CurrentWeather from "../../../../models/CurrentWeather";
import weatherFetcher from "../../../../services/impl/WeatherFetcher";

const WeatherInfo: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
		null
	);
    const isWeatherLoadedRef = useRef(false);


  useEffect(() => {
    // const weatherService = new DummyWeatherService();
    const service = new WeatherHttpService();

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
        isWeatherLoadedRef.current = true;

  }, []);

  // Dynamic icon retrieval with type assertion
  const WeatherIcon = currentWeather?.weatherState
		? (Icons as any)[`Wi${currentWeather?.weatherState}`]
		: Icons.WiDaySunny;

  return (
		<div className="weather-info-container">
			<div className="weather-detail">
				{WeatherIcon ? (
					<WeatherIcon size={50} />
				) : (
					<Icons.WiDaySunny size={50} />
				)}
				<div className="weather-detail">
					<span>{currentWeather?.weatherState || "Clear"}</span>{" "}
					{/* Default text if state is undefined */}
				</div>
			</div>
			<div className="weather-detail">
				<span className="weather-value">{currentWeather?.temperature}°</span>
				<span className="weather-label">Temperature</span>
			</div>
			<div className="weather-detail">
				<span className="weather-value">{currentWeather?.humidity}%</span>
				<span className="weather-label">Humidity</span>
			</div>
			<div className="weather-detail">
				<span className="weather-value">{currentWeather?.light}</span>
				<span className="weather-label">Light</span>
			</div>
		</div>
	);
};

export default WeatherInfo;
