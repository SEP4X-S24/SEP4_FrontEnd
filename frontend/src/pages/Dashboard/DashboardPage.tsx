import React from "react";
import DashboardFilter from "./components/Filter/DashboardFilter";
import Summary from "./components/Summary/Summary";
import TemperatureGrath from "./components/TemperatureGrath/TemperatureGrath";
import AverageHumidity from "./components/AverageHumidity/AverageHumidity";
import WeatherStateSummary from "./components/WeatherStateSummary/WeatherStateSummary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DashboardPage.css";

function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="container dashboard">
        <DashboardFilter />
        <Summary />
        <TemperatureGrath />
        <div className="dashboard-container">
          <AverageHumidity />
          <WeatherStateSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
