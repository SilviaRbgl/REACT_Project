import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Signup() {
  const { signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleEmailChange = (e) => {
    console.log("email>", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("password>", e.target.value);
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    console.log("username>", e.target.value);
    setUserName(e.target.value);
  };

  const handleSignup = () => {
    signUp(userName, email, password);
  };

  return (
    <div className="container-login">
      <h1>SIGN UP</h1>

      <p>Username</p>
      <label htmlFor="name"></label>
      <input
        type="text"
        placeholder="Enter username"
        name="text"
        value={userName}
        onChange={handleUsernameChange}
        required
      />

      <p>Email</p>
      <label htmlFor="email"></label>
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <p>Password</p>
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Enter password"
        name="psw"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button className="button" onClick={handleSignup}>
        CREATE ACCOUNT
      </button>
    </div>
  );
}

export default Signup;
