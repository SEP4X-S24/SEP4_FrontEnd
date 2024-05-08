import React, { useState } from "react";
import "./LoginPage.css";
import { FaEnvelope, FaEye } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await login({ email: email, password: password });
      setPassword("");
      setEmail("");
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="login_container">
        <h2 className="login_header">Login</h2>
        <div className="login_signin">
          <h5>Don't have an account? </h5>
          <a href="/">Sign in</a>
        </div>
        <div className="login_form">
          <div className="form_input">
            <div className="form_input_box">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <FaEnvelope
              style={{
                width: "40px",
                height: "40px",
                fill: "var(--color-secondary)",
              }}
            />
          </div>
          <div className="form_input">
            <div className="form_input_box">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <FaEye
              style={{
                width: "40px",
                height: "40px",
                fill: "var(--color-secondary)",
              }}
            />
          </div>
        </div>
        <button className="login_button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}

export default LoginPage;
