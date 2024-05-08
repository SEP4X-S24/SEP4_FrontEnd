// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../models/Accounts";
import AccountService from "../AccountService";
import DummyAccountService from "../impl/DummyAccountService";

interface AuthContextProps {
  isAuthenticated: boolean;
  token: string;
  user: Account | undefined;
  login: (userData: Account) => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const accountService: AccountService = new DummyAccountService();

  const login = async (userData: Account) => {
    try {
      setToken(await accountService.login(userData));
      setUser(userData);
      console.log(`LOGINED: ${token}`);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUser(undefined);
    setToken("");
    await accountService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};