import Account from "../models/Accounts";

interface AccountService {
  login(user: Account): Promise<string>;
  logout(): Promise<void>;
  register(user: Account): Promise<string>;
}

export default AccountService;
