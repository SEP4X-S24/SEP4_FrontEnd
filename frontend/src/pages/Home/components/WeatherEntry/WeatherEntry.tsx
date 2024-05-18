import BasicForecast from "../../../../models/BasicForecast";
import weatherIconMapper from "../../../../utils/WeatherIconMapper";
import styles from "./WeatherEntry.module.css";

interface WeatherEntryProps {
  item: BasicForecast;
  temperatureLabel?: string;
}

function WeatherEntry({ item, temperatureLabel }: WeatherEntryProps) {
  if (!Number.isNaN(item.temperature)) {
    temperatureLabel = `${item.temperature}°`;
  }

  if (!weatherIconMapper.has(item.weatherState)) {
    return null;
  }

  const Icon = weatherIconMapper.get(item.weatherState)?.Icon!;

  return (
    <div className="col">
      <div
        className={`${styles.weatherEntry} d-flex flex-column align-items-center justify-content-between`}
      >
        <label>{item.time}</label>
        {!Number.isNaN(item.temperature) ? (
          <h4>{temperatureLabel}</h4>
        ) : (
            <label className="fw-bold fs-6 text-nowrap">{temperatureLabel}</label>
        )}

        <div className={`${styles.iconWrapper} h-75`}>
          <Icon style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default WeatherEntry;
