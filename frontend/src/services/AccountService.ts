import Account from "../models/Account";

interface AccountService {
  login(user: Account): Promise<string>;
  logout(user: Account): Promise<void>;
  register(user: Account): Promise<string>;
}

export default AccountService;
