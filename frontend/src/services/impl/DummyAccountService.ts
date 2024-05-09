import Account from "../../models/Accounts";
import AccountService from "../AccountService";

const accounts: Account[] = [
  { email: "Boss", password: "bosspass" },
  { email: "sevastian", password: "passtest" },
];

export default class DummyAccountService implements AccountService {
  async logout(): Promise<void> {
    localStorage.removeItem("token");
  }

  async login(user: Account): Promise<string> {
    if (
      accounts.some(
        (el) => el.email === user.email && el.password === user.password
      )
    ) {
      const token = "awo;iujrfw4ehcshrkghndkgbwsetrhserth";
      localStorage.setItem("token", token);

      return token;
    }

    throw new Error(
      "User is not registered. Doesn't exist in the accounts list"
    );
  }

  async register(user: Account): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
