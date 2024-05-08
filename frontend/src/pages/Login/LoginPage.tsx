import React, { useEffect, useState } from "react";
import DummyAccountService from "../../services/impl/DummyAccountService";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleLogin() {
    try {
     await login({username: username, password: password})
     setUsername("")
     setPassword("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
