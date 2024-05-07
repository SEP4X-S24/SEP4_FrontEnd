import Countdown from "react-countdown";
import * as FaIcon from "react-icons/fa6";
import styles from "./ImmediateUpdateButton.module.css";
import { animated, useSpring } from "@react-spring/web";

function ImmediateUpdateButton({
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested,
}: {
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
}) {

  const timerSpring = useSpring({
    transform: isCurrentWeatherRequested
      ? "translateY(0%)"
      : "translateY(100%)",
    config: { tension: 800, friction: 10 },
  });

  const iconSpring = useSpring({
    transform: isCurrentWeatherRequested ? "translateY(-5%)" : "translateY(0%)",
    config: { tension: 500, friction: 10 }
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
          onClick={() => {
            if (!isCurrentWeatherRequested) {
              setIsCurrentWeatherRequested(true);
            }
          }}
        />
      </animated.div>
      <animated.div
        className={styles.timer}
        style={{
          ...timerSpring,
          zIndex: 1,
        }}
      >
        {isCurrentWeatherRequested && (
          <Countdown
            onComplete={() => {
              setIsCurrentWeatherRequested(false);
            }}
            date={Date.now() + 3000 * 60}
            renderer={(props) => (
              <label>{`${props.formatted.minutes}:${props.formatted.seconds}`}</label>
            )}
          />
        )}
      </animated.div>
    </div>
  );
}

export default ImmediateUpdateButton;
