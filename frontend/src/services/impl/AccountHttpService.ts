import axios from "axios";
import Account from "../../models/Account";
import AccountService from "../AccountService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default class AccountHttpService implements AccountService {
	private BASE_API_URL = "https://weatherstation4dev.azurewebsites.net/api";

	async login(user: Account): Promise<string> {
		try {
			const response = await axios.post(`${this.BASE_API_URL}/LoginAccount`, {
				email: user.email,
				password: user.password,
			});

			if (response.status === 200) {
				const token = response.data.token;
				Cookies.set("jwtToken", token);
				console.log(token);
				return token;
			}

			return "";
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				const serverErrorMessage =
					error.response.data?.error || "Unknown server error";
				throw new Error(`Error during login: ${serverErrorMessage}`);
			} else {
				console.error("Error during login:", error);
				throw error;
			}
		}
	}

	async logout(): Promise<void> {
		Cookies.remove("jwtToken");
	}

	async register(user: Account): Promise<void> {
		try {
			await axios.post(`${this.BASE_API_URL}/RegisterAccount`, {
				firstname: user.firstname!,
				lastname: user.lastname!,
				password: user.password,
				preferences:
					"I really like rainbow colors. Also I like to wear something furry things to highlight beauty of my body",
				email: user.email,
				onNotifications: "false",
			});
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				const serverErrorMessage =
					error.response.data?.error || "Unknown server error";
				throw new Error(`Error during registration: ${serverErrorMessage}`);
			} else {
				console.error("Error during registration:", error);
				throw error;
			}
		}
	}

	async getUser(): Promise<Account> {
		try {
			const token = Cookies.get("jwtToken");
			if (token) {
				let decoded = JSON.parse(JSON.stringify(jwtDecode(token)));
				let account: Account = {
					email: decoded.email,
					firstname: decoded.given_name,
					lastname: decoded.family_name,
					password: decoded.password,
				};
				console.log(account);
				return account;
			} else {
				throw new Error("No token found");
			}
		} catch (error) {
			console.error("Error decoding token:", error);
			throw error;
		}
	}
	public static decodeToken = () => {
		const token = Cookies.get("jwtToken");
		if (token) {
			const decoded = jwtDecode(token);
			console.log(decoded);
		} else {
			console.log("No token found");
		}
	};
}
