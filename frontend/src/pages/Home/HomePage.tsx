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
    <div>
      <div className="container-fluid weather-container">
        <HomeAbout about={demoData.About} />
        <HomeWeatherData weatherData={demoData.WeatherData} />
        <HomeSugestion sugestion={demoData.Suggestion} />
        <HomeTable table={demoData.Table} />
      </div>
    </div>
  );
}

export default HomePage;
