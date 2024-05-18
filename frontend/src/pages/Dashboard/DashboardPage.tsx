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
import DashboardObj from "../../models/Dashboard/DashboardObj";

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardObj | null>(null);
  const [selectedView, setSelectedView] = useState<string>("");

  const handleTimelineChange = (date: string) => {
    const service = new DashboardImplementation();
    if (date == "12 months") {
      service.fetchDataFor_12Month().then((d) => setDashboardData(d));
    } else if (date == "30 days") {
      service.fetchDataFor_30Day().then((d) => setDashboardData(d));
    } else if (date == "7 days") {
      service.fetchDataFor_7Day().then((d) => setDashboardData(d));
    }
  };

  useEffect(() => {
    const service = new DashboardImplementation();
    service.fetchDataFor_7Day().then((d) => setDashboardData(d));
  }, []);

  if (dashboardData == null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <div className="container dashboard">
        <DashboardFilter onViewChange={handleTimelineChange} />
        <Summary summary={dashboardData.summary} />
        <TemperatureGrath
          temperatureGrathData={dashboardData.temperatureGrath}
        />
        <div className="dashboard-container">
          <AverageHumidity averageHumidity={dashboardData.averageHumidity} />
          <WeatherStateSummary
            weatherStateData={dashboardData.weatherStateSummary}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
