import React, { useState } from "react";
import { login } from "../../services/AccountApi";
import "./LoginPage.css";
import COLORS from "../../utils/COLORS";
import { FaAddressCard, FaEnvelope, FaEye } from "react-icons/fa";
import InputBox from "../../components/InputBox/InputBox";
import { Link } from "react-router-dom";



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

  return (
    <>
    <div className="login_page">
      <div className="login_container">
        <h2 className="login_header">Login</h2>
        <div className="login_signin">
          <h5>Don't have an account? </h5>
          <Link to={"/Register"}>Sign in</Link>
        </div>
        <form className="login_form" onSubmit={sendData}>
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
