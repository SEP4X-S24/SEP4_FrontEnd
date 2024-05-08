import Account from "../../models/Account";
import AccountService from "../AccountService";


const accounts: Account[] = [
  { username: "Boss", password: "bosspass" },
  { username: "sevastian", password: "passtest" },
];

export default class DummyAccountService implements AccountService {
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

// export async function login(
//   username: string,
//   password: string
// ): Promise<string | null> {
//   try {
//     const response = await fetch("/account/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });
//
//     if (response.ok) {
//       const data = await response.json();
//       const token = data.token;
//       localStorage.setItem("token", token);
//     } else {
//       console.error("Login failed:", response.statusText);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return null;
//   }
// }
