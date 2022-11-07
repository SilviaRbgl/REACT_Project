import React from "react";
// import Movies from "./Movies";
import { useNavigate } from "react-router-dom";
import movieIcon from "../images/movieIcon.png";

function Home() {
  const clickSearch = useNavigate();
  const goSearch = () => {
    clickSearch("/movies");
  };

  return (
    <div className="Container">
      <h1>Welcome to moviestoreview</h1>
      <img src={movieIcon} alt="logo" />
      <p>
        moviestoreview is the world's largest site for movie recommendations.
      </p>
      <button className="Button" onClick={goSearch}>
        SEARCH MOVIES
      </button>
    </div>
  );
}

export default Home;
