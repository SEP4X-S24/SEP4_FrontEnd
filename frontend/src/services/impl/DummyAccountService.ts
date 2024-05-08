import Account from "../../models/Account";
import AccountService from "../AccountService";


const accounts: Account[] = [
  { username: "Boss", password: "bosspass" },
  { username: "sevastian", password: "passtest" },
];

export default class DummyAccountService implements AccountService {
  async logout(): Promise<void> {
    localStorage.removeItem("token");
  }

  async login(user: Account): Promise<string>{
    if (
      accounts.some(
        (el) => el.username === user.username && el.password === user.password
      )
    ) {

      const token = "awo;iujrfw4ehcshrkghndkgbwsetrhserth";
      localStorage.setItem("token", token);

      return token;
    }

    throw new Error("User is not registered. Doesn't exist in the accounts list")
  }
  
  async register(user: Account): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
