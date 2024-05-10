import React, { useEffect, useState } from "react";
import "./LoginPage.css";

import COLORS from "../../utils/COLORS";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

import { FaEnvelope, FaEye } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(data: string) {
    setEmail(data);
  }

  function handlePassword(data: string) {
    setPassword(data);
  }


  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login({ email: email, password: password });
    } catch (error: Error | any) {
      alert(error.message);
    } finally {
      setEmail("")
      setPassword("")
    }
  }

  
  return (
    <>
      <div className="login_page">
        <div className="login_container">
          <h2 className="login_header">Login</h2>
          <div className="login_signin">
            <h5>Don't have an account? </h5>
            <Link to={"/Register"}>Sign in</Link>
          </div>

          <form className="login_form" onSubmit={handleLogin}>
            <InputBox
              label="Email"
              type="email"
              InputIcon={FaEnvelope}
              handleClick={handleEmail}
            />

            <InputBox
              label="Password"
              type="password"
              InputIcon={FaEye}
              handleClick={handlePassword}
            />

            <button type="submit" className="login_button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
