import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const clickSignup = useNavigate();
  const goSignup = () => {
    clickSignup("/signup");
  };

  return (
    <div className="Card-Login">
      <h1>LOG IN</h1>
    
        <p>Username</p>
        <label htmlFor="uname"></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <p>Password</p>
        <label htmlFor="psw"></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button className="Button" onClick={goSignup}>
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
