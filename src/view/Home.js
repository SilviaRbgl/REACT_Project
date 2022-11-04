import React from "react";
import Movies from "./Movies";
import { useNavigate } from "react-router-dom";
import movieIcon from '../images/movieIcon.png';

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
      <h1>Welcome to moviestoreview.com.</h1>
      <img src={movieIcon} alt="logo"/>
      <p>MoviesToReview is the world's largest site for movie recommendations.</p>
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
