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
      } else {
        throw new Error(`Login failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    Cookies.remove("jwtToken");
  }

  async register(user: Account): Promise<void> {
    try {
      const response = await axios.post(`${this.BASE_API_URL}/RegisterAccount`, {
        firstname: user.firstname!,
        lastname: user.lastname!,
        password: user.password,
        preferences: "I really like rainbow colors. Also I like to wear something the beauty of my body",
        email: user.email,
        onNotifications: "false",
      });
  
      if (response.status === 200) {
        console.log(response.data);
      } else {
        throw new Error(`Registration failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
