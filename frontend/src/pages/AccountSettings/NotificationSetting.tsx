import React, { useState } from "react";
import InputBox from "../../components/InputBox/InputBox";
import "./NotificationSettings.css";

function NotificationSetting() {
	// const [rainNoficiation, setRainNotification] = useState(true);
	// const [windNotification, setWindNotification] = useState(true);
	// const [minusDegreeNotification, setMinusDegreeNotification] = useState(true);
	// return (
	//   <div className="container">
	//     <div className="row justify-content-center">
	//       <div className="col-md-6">
	//         <div className="p-3 bg-white rounded shadow-sm">
	//           <h3>Notification Settings</h3>
	//           <form>
	//             <div className="mb-3 form-control d-flex justify-content-between">
	//               <label className="form-check-label" htmlFor="notifications">
	//                 Notify when is raining
	//               </label>
	//               <div className="form-check">
	//                 <input
	//                   type="checkbox"
	//                   className="form-check-input"
	//                   id="rain"
	//                   checked={rainNoficiation}
	//                   onChange={() => setRainNotification(!rainNoficiation)}
	//                 />
	//               </div>
	//             </div>

	//             <div className="mb-3 form-control d-flex justify-content-between">
	//               <label className="form-check-label" htmlFor="recommendations">
	//                 Notify when strong wind is blowing
	//               </label>
	//               <div className="form-check">
	//                 <input
	//                   type="checkbox"
	//                   className="form-check-input"
	//                   id="wind"
	//                   checked={windNotification}
	//                   onChange={() => setWindNotification(!windNotification)}
	//                 />
	//               </div>
	//             </div>

	//             <div className="mb-3 form-control d-flex justify-content-between">
	//               <label className="form-check-label" htmlFor="recommendations">
	//                 Notify when is minus degree Celsius
	//               </label>
	//               <div className="form-check">
	//                 <input
	//                   type="checkbox"
	//                   className="form-check-input"
	//                   id="minuDegree"
	//                   checked={windNotification}
	//                   onChange={() => setWindNotification(!windNotification)}
	//                 />
	//               </div>
	//             </div>
	//           </form>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// );

	let rain = false;
  let wind = false;
  let temperature = false;

	function handleNotificationRain(data: boolean) {
		rain = !data;
	}
	function handleNotificationWind(data: boolean) {
		wind = !data;
	}
	function handleNotificationTemperature(data: boolean) {
    temperature = !data;
	}
	function sendData() {
		// change on implementation of logic
		console.log(rain + " " + wind + " " + temperature);
	}

	return (
		<div className="notification_settings">
			<h2 className="notification_heading">Notifications Settings</h2>
			<form action="" onSubmit={sendData} className="notification_form">
				<InputBox
					label="Notify when it is raining"
					type="checkbox"
					handleClick={handleNotificationRain}
				/>
				<InputBox
					label="Notify when strong wind is blowing"
					type="checkbox"
					handleClick={handleNotificationWind}
				/>
				<InputBox
					label="Notify when it is minus degrees Celsius"
					type="checkbox"
					handleClick={handleNotificationTemperature}
				/>
				<button type="submit" className="notification_button">
					Save
				</button>
			</form>
		</div>
	);
}

export default NotificationSetting;
