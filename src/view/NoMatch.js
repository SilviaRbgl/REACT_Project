import { Link } from "react-router-dom";
import React from "react";

function NoMatch() {
  return (
    <div className="Container">
      <p>Sorry, no results found</p>
      <iframe
        src="https://giphy.com/embed/jcxtvm2bsZDH2"
        width="320"
        height="227"
        class="giphy-embed"
      ></iframe>
    </div>
  );
}

export default NoMatch;
