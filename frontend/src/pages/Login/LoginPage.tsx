import React, { useState } from "react";
import "./LoginPage.css";

import COLORS from "../../utils/COLORS";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";

import { FaEnvelope, FaEye } from "react-icons/fa6";
import { useAuth } from "../../services/auth/AuthContext";
import { useNavigate } from "react-router-dom";




function LoginPage() {

  let  email = "";
  let password = "";

  function handleEmail(data: string) {
    email = data;
  }
  
  function handlePassword(data: string) {
    password = data;
  }
  function sendData(){
    console.log(email +" "+ password);
    }

  const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function handleLogin() {
    try {
      await login({ email: email, password: password });
      email = "";
      password = "";
      navigate("/");
    } catch (error) {
      console.log(error);
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
            handleClick={handleEmail}/>

          <InputBox 
          label="Password" 
          type="password" 
          InputIcon={FaEye} 
          handleClick={handlePassword}/>

          <button type="submit" className="login_button">Login</button>

        </form>        
      </div>

      </div>
    </>
  );
}


export default LoginPage;
