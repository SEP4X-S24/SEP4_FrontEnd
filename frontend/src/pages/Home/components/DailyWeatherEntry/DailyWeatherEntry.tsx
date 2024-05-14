import BasicForecast from "../../../../models/BasicForecast";
import WeatherEntry from "../WeatherEntry/WeatherEntry";

interface DailyWeatherEntryProps {
  minTemperature: number;
  maxTemperature: number;
  item: BasicForecast;
}

function DailyWeatherEntry({ minTemperature, maxTemperature, item }: DailyWeatherEntryProps) {
  const temperatureLabel = `${minTemperature}° - ${maxTemperature}°`;

  return <WeatherEntry item={item}  temperatureLabel={temperatureLabel}/>;
}

export default DailyWeatherEntry;
