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
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(token !== "");
  const accountService: AccountService = new DummyAccountService();

  const login = async (userData: Account) => {
    setToken(await accountService.login(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const register = async (userData: Account) => {
    setToken(await accountService.register(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    setUser(undefined);
    setToken("");
    await accountService.logout();
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
