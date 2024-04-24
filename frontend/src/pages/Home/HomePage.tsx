import HomeAbout from "./components/About/HomeAbout";
import HomeSugestion from "./components/Sugestion/HomeSugestion";
import HomeTable from "./components/Table/HomeTable";
import HomeWeatherData from "./components/WeatherData/HomeWeatherData";
import {
  demoData,
  About,
  WeatherData,
  Suggestion,
  Table,
} from "./services/DemoDataHome";

function HomePage() {
  return (
    <>
      <HomeAbout about={demoData.About} />
      <HomeWeatherData weatherData={demoData.WeatherData} />
      <HomeSugestion sugestion={demoData.Suggestion} />
      <HomeTable table={demoData.Table} />
    </>
  );
}

export default HomePage;
