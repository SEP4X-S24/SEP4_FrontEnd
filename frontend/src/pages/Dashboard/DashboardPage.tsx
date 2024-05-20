import React, { useEffect, useState } from "react";
import DashboardFilter from "./components/Filter/DashboardFilter";
import Summary from "./components/Summary/Summary";
import TemperatureGraph from "./components/TemperatureGrath/TemperatureGraph";
import AverageHumidity from "./components/AverageHumidity/AverageHumidity";
import WeatherStateSummary from "./components/WeatherStateSummary/WeatherStateSummary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DashboardPage.css";
import DashboardImplementation from "../../services/impl/DashboardImplementation";
import DashboardObj from "../../models/Dashboard/DashboardObj";
import DemoDashboardData from "../../services/impl/Demo/DemoDashboardData";

const DashboardPage: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardObj | null>(null);
  const [selectedView, setSelectedView] = useState<string>("");

  const handleTimelineChange = (date: string) => {
    const service = new DashboardImplementation();
    if (date === "12 months") {
      service
        .fetchDataFor_12Month()
        .then((d) => setDashboardData(d))
        .catch((err) => {
          console.error("Error fetching data for 12 months:", err);
          setDashboardData({
            summary: {},
            temperatureGrath: [],
            averageHumidity: [],
            weatherStateSummary: {},
          });
        });
    } else if (date === "30 days") {
      service
        .fetchDataFor_30Day()
        .then((d) => setDashboardData(d))
        .catch((err) => {
          console.error("Error fetching data for 30 days:", err);
          setDashboardData({
            summary: {},
            temperatureGrath: [],
            averageHumidity: [],
            weatherStateSummary: {},
          });
        });
    } else if (date === "7 days") {
      service
        .fetchDataFor_7Day()
        .then((d) => setDashboardData(d))
        .catch((err) => {
          console.error("Error fetching data for 7 days:", err);
          setDashboardData({
            summary: {},
            temperatureGrath: [],
            averageHumidity: [],
            weatherStateSummary: {},
          });
        });
    }
  };

  useEffect(() => {
    const service = new DashboardImplementation();
    const fetchDataForWeek = async () => {
      try {
        const fetchedData = await service.fetchDataFor_7Day();
        setDashboardData(fetchedData);
      } catch (error) {
        console.error("Error fetching data for 7 days:", error);
        setDashboardData({
          summary: {},
          temperatureGrath: [],
          averageHumidity: [],
          weatherStateSummary: {},
        });
      }
    };
    fetchDataForWeek();
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
        <TemperatureGraph temperatureGraph={dashboardData.temperatureGrath} />
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
};

export default DashboardPage;
