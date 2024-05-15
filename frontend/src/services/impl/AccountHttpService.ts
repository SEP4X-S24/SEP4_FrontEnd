import axios from "axios";
import Account from "../../models/Account";
import AccountService from "../AccountService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default class AccountHttpService implements AccountService {
  private BASE_API_URL = "https://weatherstation4dev.azurewebsites.net/api";

  async login(user: Account): Promise<string> {
    const response = await axios.post(`${this.BASE_API_URL}/LoginAccount`, {
      email: user.email,
      password: user.password,
    });

    console.log(response);
    // TODO: Add error handling

    const token = response.data.token;
    Cookies.set("jwtToken", token);
    console.log(token);
    return token;
  }

  async logout(): Promise<void> {
    Cookies.remove("jwtToken");
  }

  async register(user: Account): Promise<string> {
    const response = await axios.post(`${this.BASE_API_URL}/RegisterAccount`, {
      firstname: user.firstname!,
      lastname: user.lastname!,
      password: user.password,
      preferences:
        "I really like rainbow colors. Also I like to wear something the beauty of my body",
      email: user.email,
      onNotifications: "false",
    });
    console.log(response.data);
    const token = response.data.token;
    // TODO: Add error handling
    Cookies.set("jwtToken", token);
    return token;
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
