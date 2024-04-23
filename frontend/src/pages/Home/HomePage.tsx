import HomeAbout from "./components/About/HomeAbout";
import HomeSugestion from "./components/Sugestion/HomeSugestion";
import HomeTable from "./components/Table/HomeTable";
import HomeWeatherData from "./components/WeatherData/HomeWeatherData";

function HomePage() {
  return (
    <>
      <HomeAbout />
      <HomeWeatherData />
      <HomeSugestion />
      <HomeTable />
    </>
  );
}

export default HomePage;
