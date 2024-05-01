import HomeAbout from "./components/About/HomeAbout";
import HomeSugestion from "./components/Sugestion/HomeSugestion";
import HomeTable from "./components/Table/HomeTable";
import HomeWeatherData from "./components/WeatherData/HomeWeatherData";
import "./HomePageStyles.css";
import {
  demoData,
  About,
  WeatherData,
  Suggestion,
  Table,
} from "./services/DemoDataHome";

function HomePage() {
  return (
    <div className="container-fluid weather-root d-flex align-items-center justify-content-center">
      <div className="weather-container">
        <HomeAbout about={demoData.About} />
        {/* <HomeWeatherData weatherData={demoData.WeatherData} />
        <HomeSugestion sugestion={demoData.Suggestion} />
        <HomeTable table={demoData.Table} /> */}
      </div>
    </div>
  );
}

export default HomePage;
