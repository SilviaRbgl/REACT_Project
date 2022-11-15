import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import nomatchvideo from "../images/nomatchvideo.mp4";
import { FaBackward } from "react-icons/fa";

function NoMatch() {

  const clickSearch = useNavigate();
  const goSearch = () => {
    clickSearch("/movies");
  };

  return (
    <div className="container-nomatch">
      <h3>Sorry, no results found</h3>
      {/* <iframe
        src="https://giphy.com/embed/jcxtvm2bsZDH2"
        width="320"
        height="227"
        className="giphy-embed"
      ></iframe> */}
      <video autoPlay="autoPlay" loop="loop" playsInline className="video" src={nomatchvideo} type="video/mp4" />
      {/* <Icon src= {FaBackward} ></Icon> */}
      <button className="button" onClick={goSearch}>
         BACK TO SEARCH MOVIES 
      </button>
      <br></br>
      <button className="button" onClick={goSearch}>
         <FaBackward />
      </button>
      

    </div>
  );
}

export default NoMatch;
