import Countdown from "react-countdown";
import * as FaIcon from "react-icons/fa6";
import "./ImmediateUpdateButtonMobileVersion.css";

function ImmediateUpdateButtonMobileVersion({
  isCurrentWeatherRequested,
  setIsCurrentWeatherRequested,
}: {
  isCurrentWeatherRequested: boolean;
  setIsCurrentWeatherRequested: (value: boolean) => void;
}) {
  return (
    <div
      className="immediate-update-mobile"
      onClick={() => {
        if (!isCurrentWeatherRequested) {
          setIsCurrentWeatherRequested(true);
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
        <div>
          <Countdown
            onStart={() => setIsCurrentWeatherRequested(true)}
            onComplete={() => {
              setIsCurrentWeatherRequested(false);
            }}
            date={Date.now() + 3000 * 60}
            renderer={(props) => (
              <h3>{`${props.formatted.minutes}:${props.formatted.seconds}`}</h3>
            )}
          />
        </div>
      )}
    </div>
  );
}

export default ImmediateUpdateButtonMobileVersion;
