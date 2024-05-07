import Countdown from "react-countdown";
import * as FaIcon from "react-icons/fa6";
import styles from "./ImmediateUpdateButton.module.css"

function ImmediateUpdateButton({
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested,
}: {
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
}) {
  return (
    <div className={styles.immediateUpdate}>
      <div className={styles.updateIconWrapper}>
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
      </div>
      {isCurrentWeatherRequested ? (
        <div className={styles.timer}>
          <Countdown
            onStart={() => setIsCurrentWeatherRequested(true)}
            onComplete={() => {
              setIsCurrentWeatherRequested(false);
            }}
            date={Date.now() + 3000*60}
            renderer={(props) => (
              <label>{`${props.formatted.minutes}:${props.formatted.seconds}`}</label>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ImmediateUpdateButton;
