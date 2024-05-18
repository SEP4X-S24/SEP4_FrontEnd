import Countdown from "react-countdown";
import * as FaIcon from "react-icons/fa6";
import styles from "./ImmediateUpdateButton.module.css";
import { animated, useSpring } from "@react-spring/web";
import WeatherHttpService from "../../services/impl/WeatherHttpService";
import { useAuth } from "../../services/auth/AuthContext";
import CurrentWeather from "../../models/CurrentWeather";

function ImmediateUpdateButton({
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested,
  setCurrentWeather,
}: {
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
  setCurrentWeather: (weather: CurrentWeather) => void;
}) {
  const { isAuthenticated, token } = useAuth();
  const service = new WeatherHttpService();

  const timerSpring = useSpring({
    transform: isCurrentWeatherRequested
      ? "translateY(0%)"
      : "translateY(100%)",
    config: { tension: 800, friction: 10 },
  });

  const iconSpring = useSpring({
    transform: isCurrentWeatherRequested ? "translateY(-5%)" : "translateY(0%)",
    config: { tension: 500, friction: 10 },
  });

  return (
    <div className={styles.immediateUpdate}>
      <animated.div
        className={styles.updateIconWrapper}
        style={{
          ...iconSpring,
          zIndex: 1,
        }}
      >
        <FaIcon.FaArrowRotateRight
          style={{
            width: "100%",
            height: "100%",
            fill: isCurrentWeatherRequested ? "#999999" : "white",
          }}
          onClick={async () => {
            if (!isCurrentWeatherRequested) {
              setIsCurrentWeatherRequested(true);

              service.fetchWeatherImmediately(token).then((w) => {
                setCurrentWeather(w);
                setIsCurrentWeatherRequested(false);
              });
            }
          }}
        />
      </animated.div>
    </div>
  );
}

export default ImmediateUpdateButton;
