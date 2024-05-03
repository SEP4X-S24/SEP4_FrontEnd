import BasicForecast from "./BasicForecast";

export default interface DailyForecast extends BasicForecast {
  minTemperature?: number;
  maxTemperature?: number;
  humidity: number;
}
