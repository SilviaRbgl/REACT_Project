import React from "react";
import Movies from "./Movies";
import { useNavigate } from "react-router-dom";

function Home() {
  const clickSearch = useNavigate();
  const goSearch = () => {
    clickSearch("/movies");
  };

  const clickLogin = useNavigate();
  const goLogin = () => {
    clickLogin("/login");
  };

  const clickRegister = useNavigate();
  const goRegister = () => {
    clickRegister("/register");
  };

  return (
    <div className="Container">
      <p>Welcome to moviestowatch.com.</p>
      <p>I have to still build this page, so be patiente.</p>
      <p>If you want to search movies, click here:</p>
      <button className="Button" onClick={goSearch}>
        SEARCH MOVIES
      </button>
      <p>If you want to log in, click here:</p>
      <button className="Button" onClick={goLogin}>
        LOG IN
      </button>
      <p>New here? You can register here:</p>
      <button className="Button" onClick={goRegister}>
        REGISTER
      </button>
    </div>
  );
}

export default Home;
