import Account from "../models/Account";

interface AccountService{
    login(user: Account): Promise<string>;
    register(user: Account): Promise<string>;
}

export default AccountService;