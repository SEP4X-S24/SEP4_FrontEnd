import BasicForecast from "./BasicForecast";

export default interface HourlyForecast extends BasicForecast {
    windSpeed?: number;
    rainChance?: number;
}