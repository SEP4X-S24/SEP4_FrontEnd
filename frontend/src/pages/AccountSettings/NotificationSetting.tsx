import React, { useState } from "react";

function NotificationSetting() {
  const [rainNoficiation, setRainNotification] = useState(true);
  const [windNotification, setWindNotification] = useState(true);
  const [minusDegreeNotification, setMinusDegreeNotification] = useState(true);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-3 bg-white rounded shadow-sm">
            <h3>Notification Settings</h3>
            <form>
              <div className="mb-3 form-control d-flex justify-content-between">
                <label className="form-check-label" htmlFor="notifications">
                  Notify when is raining
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rain"
                    checked={rainNoficiation}
                    onChange={() => setRainNotification(!rainNoficiation)}
                  />
                </div>
              </div>

              <div className="mb-3 form-control d-flex justify-content-between">
                <label className="form-check-label" htmlFor="recommendations">
                  Notify when strong wind is blowing
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wind"
                    checked={windNotification}
                    onChange={() => setWindNotification(!windNotification)}
                  />
                </div>
              </div>

              <div className="mb-3 form-control d-flex justify-content-between">
                <label className="form-check-label" htmlFor="recommendations">
                  Notify when is minus degree Celsius
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="minuDegree"
                    checked={windNotification}
                    onChange={() => setWindNotification(!windNotification)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSetting;
