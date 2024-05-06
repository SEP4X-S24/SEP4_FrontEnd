export default interface CurrentWeather {
    location: string;
    currentTemperature: number;
    currentWeather: string;
    timeChecked: string;
    humidity?: number;
    windSpeed?: number;
  }