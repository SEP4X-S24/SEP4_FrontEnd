export default interface CurrentWeather {
  location: string;
  currentTemperature: number;
  weatherState: string;
  time: string;
  humidity?: number;
  windSpeed?: number;
  light?: number; // TODO: rename
}
