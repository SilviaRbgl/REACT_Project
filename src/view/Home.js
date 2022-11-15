import React, { useContext } from "react";
// import Movies from "./Movies";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import movieIcon from "../images/movieIcon.png";
import countdown from "../images/countdown.mp4"
import { FaSearch } from "react-icons/fa";

function Home() {
  const clickSearch = useNavigate();
  const goSearch = () => {
    clickSearch("/movies");
  };
  const {user} = useContext(AuthContext)
  console.log('user :>> ', user);

  return (
    <div className="Container">
      <h1>Welcome to moviestoreview</h1>
      <video autoPlay="autoPlay" loop="loop" playsInline className="video" src={countdown} type="video/mp4" />
      {/* <img src={movieIcon} alt="logo" /> */}
      {/* <iframe
        src="https://giphy.com/embed/A8OSeenhtpey43CcMG"
        max-width="320"
        height="227"
        className="giphy-embed"
      ></iframe> */}
      <p>
        moviestoreview is the world's largest site for movie recommendations. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button className="Button" onClick={goSearch}>
        <FaSearch />  SEARCH MOVIES
      </button>
    </div>
  );
}

export default Home;
