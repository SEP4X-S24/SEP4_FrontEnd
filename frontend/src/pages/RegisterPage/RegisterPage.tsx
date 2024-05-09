import React, { useEffect, useState } from "react";
// import { login } from "../../services/AccountApi";
import "./RegisterPage.css";
// import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import InputBox from "../../components/InputBox/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/AuthContext";
import Account from "../../models/Account";

function RegisterPage() {
  let email = "";
  let password = "";
  let firstname = "";
  let lastname = "";

  function handleFirstname(data: string) {
    firstname = data;
  }

  function handleLastname(data: string) {
    lastname = data;
  }

  function handleEmail(data: string) {
    email = data;
  }

  function handlePassword(data: string) {
    password = data;
  }

  const { isAuthenticated, register, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      navigate("/");
    }
  }, [isAuthenticated, navigate, user]);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const acc: Account = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      };

      await register(acc);
    } catch (error: Error | any) {
      alert(error.message);
    } finally {
      email = "";
      password = "";
      firstname = "";
      lastname = "";
    }
  }

  return (
    <>
      <div className="register_page">
        <div className="register_container">
          <h2 className="register_header">Register</h2>
          <div className="register_signin">
            <h5>Have an account? </h5>
            <Link to="/login">Log in</Link>
          </div>
          <form className="register_form" onSubmit={handleRegister}>
            <InputBox
              label="First Name"
              type="text"
              InputIcon={FaAddressCard}
              handleClick={handleFirstname}
            />
            <InputBox
              label="Last Name"
              type="text"
              InputIcon={FaAddressCard}
              handleClick={handleLastname}
            />
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

            <button type="submit" className="register_button">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
