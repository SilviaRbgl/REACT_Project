import { Link } from "react-router-dom";
import React from "react";
import nomatchvideo from "../images/nomatchvideo.mov";

function NoMatch() {
  return (
    <div className="Container">
      <p>Sorry, no results found</p>
      <iframe
        src="https://giphy.com/embed/jcxtvm2bsZDH2"
        width="320"
        height="227"
        className="giphy-embed"
      ></iframe>
      {/* <video src={nomatchvideo} width="600" height="300" autoplay="true" /> */}
    </div>
  );
}

export default NoMatch;
