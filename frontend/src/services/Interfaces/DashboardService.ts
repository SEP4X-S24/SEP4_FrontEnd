import DashboardObj from "../../models/Dashboard/DashboardObj";

export default interface DashboardService {
  fetchDataFor_7Day(): Promise<DashboardObj>;
  fetchDataFor_30Day(): Promise<DashboardObj>;
  fetchDataFor_12Month(): Promise<DashboardObj>;
}
