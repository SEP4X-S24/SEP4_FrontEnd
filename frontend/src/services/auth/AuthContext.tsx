// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../models/Account";
import AccountService from "../AccountService";
import DummyAccountService from "../impl/DummyAccountService";
import AccountHttpService from "../impl/AccountHttpService";
import Cookies from "js-cookie";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string;
  user: Account | undefined;
  login: (userData: Account) => Promise<void>;
  register: (userData: Account) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Account | undefined>();
  const [token, setToken] = useState(Cookies.get("jwtToken") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(token !== "");
  const accountService: AccountService = new AccountHttpService();

  useEffect(() => {
    if (token) {
      setUser(AccountHttpService.decodeToken());
      console.log(user);
    }
  }, [token]);

  const login = async (userData: Account) => {
    setToken(await accountService.login(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const register = async (userData: Account) => {
    await accountService.register(userData);
  };

  const logout = async () => {
    await accountService.logout();
    setUser(undefined);
    setToken("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
