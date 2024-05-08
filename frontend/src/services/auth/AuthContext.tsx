// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
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
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Perform login logic here...
    setAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic here...
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: authenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
