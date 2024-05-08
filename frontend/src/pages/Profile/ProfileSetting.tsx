import React, { useState } from "react";

function ProfileSetting() {
  const [firstName, setFirstName] = useState("Michael");
  const [secondName, setSecondName] = useState("Leo");
  const [email, setEmail] = useState("michaels.email@gmail.com");
  const [password, setPassword] = useState("password");
  const [receiveNotifications, setReceiveNotifications] = useState(true);
  const [receiveRecommendations, setReceiveRecommendations] = useState(true);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-3 bg-white rounded shadow-sm">
            <h3>Profile Settings</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="secondName" className="form-label">
                  Second name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="secondName"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h3>Profile Settings</h3>
              <div className="mb-3 form-control d-flex justify-content-between">
                <label className="form-check-label" htmlFor="notifications">
                  Do you want to receive notifications?
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="notifications"
                    checked={receiveNotifications}
                    onChange={() =>
                      setReceiveNotifications(!receiveNotifications)
                    }
                  />
                </div>
              </div>

              <h3>Recomendation Settings</h3>
              <div className="mb-3 form-control d-flex justify-content-between">
                <label className="form-check-label" htmlFor="recommendations">
                  Do you want to receive recommendations?
                </label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="recommendations"
                    checked={receiveRecommendations}
                    onChange={() =>
                      setReceiveRecommendations(!receiveRecommendations)
                    }
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

export default ProfileSetting;
