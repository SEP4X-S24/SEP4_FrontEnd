import React, { useState } from "react";
import { login } from "../../services/AccountApi";
import "./LoginPage.css";
import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";



// function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   async function handleLogin(username: string, password: string) {
//     try {
//       const token = await login(username, password);
//     } catch (error) {
//       // Handle login error
//       console.log(error);
//     }
//   }

//   return (
//     <form onSubmit={(e) => handleLogin(username, password)}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

function LoginPage() {


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
            <input></input>
            </div>
            <FaEnvelope style={{width:"40px", height: "40px",  fill: "var(--color-secondary)"}}/>
          </div>
          <div className="form_input">
          <div className="form_input_box">
            <label htmlFor="">Password</label>
            <input type="password"></input>
            </div>
            <FaEye style={{width:"40px", height: "40px", fill: "var(--color-secondary)",
}}/>
          </div>
        </div>        
          <button className="login_button">Login</button>
      </div>
    </>
  );
}

export default LoginPage;
