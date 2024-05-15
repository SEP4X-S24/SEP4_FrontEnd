import axios from "axios";
import Account from "../../models/Account";
import AccountService from "../AccountService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default class AccountHttpService implements AccountService {
  private BASE_API_URL = "https://weatherstation4dev.azurewebsites.net/api";

  async login(user: Account): Promise<string> {
    const response = await axios.post(`${this.BASE_API_URL}/Login`, user);
    const token = response.data.token;
    Cookies.set("jwtToken", token);
    return token;
  }

  async logout(user: Account): Promise<void> {
    const response = await axios.post(`${this.BASE_API_URL}/Logout`, user);
    const token = response.data.token;
    Cookies.set("jwtToken", token);
    return token;
  }


  async register(user: Account): Promise<string> {
    const response = await axios.post(`${this.BASE_API_URL}/Register`, user);
    const token = response.data.token;
    Cookies.set("jwtToken", token);
    return token;
  }

  public static decodeToken = () => {
    const token = Cookies.get('jwtToken');
    if (token) {
        const decoded = jwtDecode(token);
        console.log(decoded);
    } else {
        console.log('No token found');
    }
};
}
