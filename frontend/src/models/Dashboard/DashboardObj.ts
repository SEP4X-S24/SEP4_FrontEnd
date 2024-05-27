import AverageHumidityObj from "./AverageHumidityObj";
import SummaryObj from "./SummaryObj";
import TemperatureGrathObject from "./TemperatureGrathObject";
import WeatherStateObj from "./WeatherStateObj";

export default interface DashboardObj {
  summary: SummaryObj;
  temperatureGrath: TemperatureGrathObject[];
  averageHumidity: AverageHumidityObj[];
  weatherStateSummary: WeatherStateObj;
}
