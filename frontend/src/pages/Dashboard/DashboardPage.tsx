import React, { useEffect, useState } from "react";
import DashboardFilter from "./components/Filter/DashboardFilter";
import Summary from "./components/Summary/Summary";
import TemperatureGrath from "./components/TemperatureGrath/TemperatureGrath";
import AverageHumidity from "./components/AverageHumidity/AverageHumidity";
import WeatherStateSummary from "./components/WeatherStateSummary/WeatherStateSummary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DashboardPage.css";
import DashboardImplementation from "../../services/impl/DashboardImplementation";
import TemperatureGrathObject from "../../models/Dashboard/TemperatureGrathObject";

function DashboardPage() {
  const [temperatureGrath, setTemperatureGrath] = useState<
    TemperatureGrathObject[] | null
  >(null);

  useEffect(() => {
    const service = new DashboardImplementation();

    const fetchTemperatureData = async () => {
      const fetchData = await service.fetchDataFor_24H();
      setTemperatureGrath(fetchData.temperaureGrath);
    };

    fetchTemperatureData();
  }, []);

  if (temperatureGrath == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <div className="container dashboard">
        <DashboardFilter />
        <Summary />
        <TemperatureGrath temperatureGrathData={temperatureGrath} />
        <AverageHumidity />
        <WeatherStateSummary />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
