import React from "react";
import '../index.css';

function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>HOME</li>
        {/* <img src="{./images/movie-icon.png}" alt=""> */}
        <button
          className="Button"
          onClick={() => console.log("you clicked logIn button")}
        >LOG IN</button>
      </ul>
    </div>
  );
}

export default NavBar;
