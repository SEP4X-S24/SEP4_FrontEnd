import { IconType } from "react-icons";
import * as Icon from "react-icons/wi";

interface WeatherStateEntity {
  Icon: IconType;
  description: string;
}

const weatherIconMapper = new Map<string | number, WeatherStateEntity>();

weatherIconMapper.set(0, { Icon: Icon.WiDaySunny, description: "Sunny" });
weatherIconMapper.set(1, {
  Icon: Icon.WiDayCloudy,
  description: "Little cloudy",
});
weatherIconMapper.set(2, { Icon: Icon.WiCloud, description: "Partly cloudy" });
weatherIconMapper.set(3, { Icon: Icon.WiCloudy, description: "Cloudy" });
weatherIconMapper.set(45, { Icon: Icon.WiDayFog, description: "Little foggy" });
weatherIconMapper.set(48, { Icon: Icon.WiFog, description: "Foggy" });
weatherIconMapper.set(51, {
  Icon: Icon.WiDaySprinkle,
  description: "Light drizzle",
});
weatherIconMapper.set(53, {
  Icon: Icon.WiDaySprinkle,
  description: "Moderate drizzle",
});
weatherIconMapper.set(55, {
  Icon: Icon.WiSprinkle,
  description: "Heavy drizzle",
});
weatherIconMapper.set(56, {
  Icon: Icon.WiDaySleet,
  description: "Freezing light drizzle",
});
weatherIconMapper.set(57, {
  Icon: Icon.WiDaySleetStorm,
  description: "Freezing intense drizzle",
});
weatherIconMapper.set(61, {
  Icon: Icon.WiDayRainMix,
  description: "Light rain",
});
weatherIconMapper.set(63, {
  Icon: Icon.WiDayShowers,
  description: "Moderate rain",
});
weatherIconMapper.set(65, { Icon: Icon.WiDayRain, description: "Heavy rain" });
weatherIconMapper.set(66, {
  Icon: Icon.WiDayRainWind,
  description: "Freezing rain",
});
weatherIconMapper.set(67, {
  Icon: Icon.WiRainWind,
  description: "Freezing heavy rain",
});
weatherIconMapper.set(71, { Icon: Icon.WiDaySnow, description: "Light snow" });
weatherIconMapper.set(73, {
  Icon: Icon.WiDaySnowWind,
  description: "Moderate snow",
});
weatherIconMapper.set(75, { Icon: Icon.WiSnowWind, description: "Heavy snow" });
weatherIconMapper.set(77, {
  Icon: Icon.WiSnowWind,
  description: "Snow grains",
});
weatherIconMapper.set(80, {
  Icon: Icon.WiShowers,
  description: "Rain light showers",
});
weatherIconMapper.set(81, {
  Icon: Icon.WiShowers,
  description: "Rain moderate showers",
});
weatherIconMapper.set(82, {
  Icon: Icon.WiStormShowers,
  description: "Rain heavy showers",
});
weatherIconMapper.set(85, {
  Icon: Icon.WiSnowWind,
  description: "Snow light showers",
});
weatherIconMapper.set(86, {
  Icon: Icon.WiDaySnowThunderstorm,
  description: "Snow heavy showers",
});
weatherIconMapper.set(95, {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm",
});
weatherIconMapper.set(96, {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm with light hail",
});
weatherIconMapper.set(99, {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm with heavy hail",
});

weatherIconMapper.set("Sunny", { Icon: Icon.WiDaySunny, description: "Sunny" });
weatherIconMapper.set("Little cloudy", {
  Icon: Icon.WiDayCloudy,
  description: "Little cloudy",
});
weatherIconMapper.set("Partly cloudy", {
  Icon: Icon.WiCloud,
  description: "Partly cloudy",
});
weatherIconMapper.set("Cloudy", { Icon: Icon.WiCloudy, description: "Cloudy" });
weatherIconMapper.set("Little foggy", {
  Icon: Icon.WiDayFog,
  description: "Little foggy",
});
weatherIconMapper.set("Foggy", { Icon: Icon.WiFog, description: "Foggy" });
weatherIconMapper.set("Light drizzle", {
  Icon: Icon.WiDaySprinkle,
  description: "Light drizzle",
});
weatherIconMapper.set("Moderate drizzle", {
  Icon: Icon.WiDaySprinkle,
  description: "Moderate drizzle",
});
weatherIconMapper.set("Heavy drizzle", {
  Icon: Icon.WiSprinkle,
  description: "Heavy drizzle",
});
weatherIconMapper.set("Freezing light drizzle", {
  Icon: Icon.WiDaySleet,
  description: "Freezing light drizzle",
});
weatherIconMapper.set("Freezing intense drizzle", {
  Icon: Icon.WiDaySleetStorm,
  description: "Freezing intense drizzle",
});
weatherIconMapper.set("Light rain", {
  Icon: Icon.WiDayRainMix,
  description: "Light rain",
});
weatherIconMapper.set("Moderate rain", {
  Icon: Icon.WiDayShowers,
  description: "Moderate rain",
});
weatherIconMapper.set("Heavy rain", {
  Icon: Icon.WiDayRain,
  description: "Heavy rain",
});
weatherIconMapper.set("Freezing rain", {
  Icon: Icon.WiDayRainWind,
  description: "Freezing rain",
});
weatherIconMapper.set("Freezing heavy rain", {
  Icon: Icon.WiRainWind,
  description: "Freezing heavy rain",
});
weatherIconMapper.set("Light snow", {
  Icon: Icon.WiDaySnow,
  description: "Light snow",
});
weatherIconMapper.set("Moderate snow", {
  Icon: Icon.WiDaySnowWind,
  description: "Moderate snow",
});
weatherIconMapper.set("Heavy snow", {
  Icon: Icon.WiSnowWind,
  description: "Heavy snow",
});
weatherIconMapper.set("Snow grains", {
  Icon: Icon.WiSnowWind,
  description: "Snow grains",
});
weatherIconMapper.set("Rain light showers", {
  Icon: Icon.WiShowers,
  description: "Rain light showers",
});
weatherIconMapper.set("Rain moderate showers", {
  Icon: Icon.WiShowers,
  description: "Rain moderate showers",
});
weatherIconMapper.set("Rain heavy showers", {
  Icon: Icon.WiStormShowers,
  description: "Rain heavy showers",
});
weatherIconMapper.set("Snow light showers", {
  Icon: Icon.WiSnowWind,
  description: "Snow light showers",
});
weatherIconMapper.set("Snow heavy showers", {
  Icon: Icon.WiDaySnowThunderstorm,
  description: "Snow heavy showers",
});
weatherIconMapper.set("Thunderstorm", {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm",
});
weatherIconMapper.set("Thunderstorm with light hail", {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm with light hail",
});
weatherIconMapper.set("Thunderstorm with heavy hail", {
  Icon: Icon.WiThunderstorm,
  description: "Thunderstorm with heavy hail",
});

export default weatherIconMapper;
