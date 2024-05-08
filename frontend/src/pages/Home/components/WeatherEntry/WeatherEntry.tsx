import BasicForecast from "../../../../models/BasicForecast";
import weatherIconMapper from "../../../../utils/WeatherIconMapper";
import styles from "./WeatherEntry.module.css";

function WeatherEntry({ item }: { item: BasicForecast }) {

  if(!weatherIconMapper.has(item.weatherState)){
    return null;
  }

  const Icon = weatherIconMapper.get(item.weatherState)!;

  return (
    <div className="col">
      <div
        className={`${styles.weatherEntry} d-flex flex-column align-items-center justify-content-between`}
      >
        <label>{item.time}</label>
        <h4>{item.temperature}°</h4>
        <div className={`${styles.iconWrapper} h-75`}>
          <Icon style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default WeatherEntry;
