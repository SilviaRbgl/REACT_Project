import React from "react";

function Signup() {
  return (
    <div className="Card-Login">
      <h1>SIGN UP</h1>
    
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

        <button className="Button">
          CREATE ACCOUNT
        </button>
    </div>
  );
}

export default Signup;
