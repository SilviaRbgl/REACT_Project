import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/login">Log in</Link>
        <Link to="/register">Register</Link>
        {/* <img src="{./images/movie-icon.png}" alt=""> */}
        {/* <button
          className="Button"
          onClick={() => console.log("you clicked logIn button")}
        >LOG IN</button> */}
      </ul>
    </div>
  );
}

export default NavBar;
