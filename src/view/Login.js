import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const clickRegister = useNavigate();
  const goRegister = () => {
    clickRegister("/register");
  };

  return (
    <div className="Container">
      <p>Welcome to Log In page of moviestowatch.com.</p>
      <p>I have to still build this page, so be patiente.</p>

      <p>New here? You can register here:</p>
      <button className="Button" onClick={goRegister}>
        REGISTER
      </button>
    </div>
  );
}

export default Login;
