import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {

  const clickSignup = useNavigate();
  const goSignup = () => {
    clickSignup("/signup");
  };

  const {logIn} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmailChange = (e) => {
    console.log("email>", e.target.value);
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    console.log("password>", e.target.value);
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    logIn(email, password)
  }

  return (
    <div className="Card-Login">
      <h1>LOG IN</h1>
    
      <p>Email</p>
      <label htmlFor="email"></label>
      <input type="email" placeholder="Enter email" name="email" value={email} onChange={handleEmailChange} required />

      <p>Password</p>
      <label htmlFor="password"></label>
      <input type="password" placeholder="Enter password" name="psw" value={password} onChange={handlePasswordChange} required />

        <button className="Button" onClick={handleLogin}>
          LOG IN
        </button>
        <br></br>     
        <input 
        type="checkbox" 
        // checked="checked" 
        name="remember" />Remeber me<br></br>
      
        <p>Don't have an account?</p>
      <button className="Button" onClick={goSignup}>
        SIGN UP HERE
      </button>
    </div>
  );
}

export default Login;
