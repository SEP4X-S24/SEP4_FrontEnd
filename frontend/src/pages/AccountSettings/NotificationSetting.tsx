import InputBox from "../../components/InputBox/InputBox";
import "./NotificationSettings.css";

function NotificationSetting() {
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
