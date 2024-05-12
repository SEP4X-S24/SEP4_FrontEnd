import BasicForecast from "./BasicForecast";

export default interface CurrentWeather extends BasicForecast {
  location: string;
  humidity?: number;
  light?: number;
}
