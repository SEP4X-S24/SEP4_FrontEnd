import React, { useState } from "react";
import { login } from "../../services/AccountApi";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(username: string, password: string) {
    try {
      const token = await login(username, password);
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(username, password)}>
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
