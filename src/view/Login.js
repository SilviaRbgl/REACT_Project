import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const clickRegister = useNavigate();
  const goRegister = () => {
    clickRegister("/register");
  };

  return (
    <div className="Card-Login">
      <h1>LOG IN</h1>
    
        <p>Username</p>
        <label for="uname"></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <p>Password</p>
        <label for="psw"></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button className="Button" onClick={goRegister}>
          LOG IN
        </button>
        <br></br>     
        <input type="checkbox" checked="checked" name="remember" />Remeber me<br></br>
      
        <p>Don't have an account?</p>
      <button className="Button" onClick={goRegister}>
        SIGN UP HERE
      </button>
    </div>
  );
}

export default Login;
