// AuthContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Account from "../../models/Account";
import AccountService from "../Interfaces/AccountService";
import AccountHttpService from "../impl/AccountHttpService";
import Cookies from "js-cookie";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string;
  user: Account | undefined;
  login: (userData: { email: string; password: string }) => Promise<void>;
  register: (userData: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  update: (
    userData: { email: string; password: string },
    newPassword: string
  ) => Promise<void>;
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
      accountService.getUser().then(setUser);
    }
  }, [token]);

  const login = async (userData: { email: string; password: string }) => {
    const token = await accountService.login(userData);
    Cookies.set("jwtToken", token); // Ensure Cookies.set is called
    setToken(token);
    setIsAuthenticated(true);
    const user = await accountService.getUser();
    setUser(user);
  };

  const register = async (userData: { email: string; password: string }) => {
    await accountService.register(userData);
  };

  const logout = async () => {
    await accountService.logout();
    Cookies.remove("jwtToken"); // Ensure Cookies.remove is called
    setUser(undefined);
    setToken("");
    setIsAuthenticated(false);
  };

  const update = async (
    userData: { email: string; password: string },
    newPassword: string
  ) => {
    await accountService.update(userData, newPassword);
    const user = await accountService.getUser();
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, user, login, logout, register, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};
