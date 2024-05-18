import Countdown from "react-countdown";
import * as FaIcon from "react-icons/fa6";
import "./ImmediateUpdateButtonMobileVersion.css";
import CurrentWeather from "../../models/CurrentWeather";
import WeatherHttpService from "../../services/impl/WeatherHttpService";
import { useAuth } from "../../services/auth/AuthContext";

function ImmediateUpdateButtonMobileVersion({
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested,
  setCurrentWeather,
}: {
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
  setCurrentWeather: (weather: CurrentWeather) => void;
}) {
  const service = new WeatherHttpService();
  const { isAuthenticated, token } = useAuth();

  return (
    <div
      className="immediate-update-mobile"
      onClick={async () => {
        if (!isCurrentWeatherRequested) {
          setIsCurrentWeatherRequested(true);

          service.fetchWeatherImmediately(token).then((w) => {
            setCurrentWeather(w);
            setIsCurrentWeatherRequested(false);
          });
        }
      }}
    >
      {!isCurrentWeatherRequested ? (
        <div className="d-flex justify-content-between w-100">
          <h4>Update</h4>
          <div className="update-icon-wrapper">
            <FaIcon.FaArrowRotateRight
              style={{
                width: "100%",
                height: "100%",
                fill: isCurrentWeatherRequested ? "#999999" : "white",
              }}
            />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ImmediateUpdateButtonMobileVersion;
