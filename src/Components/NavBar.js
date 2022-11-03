import React from "react";
import '../index.css';
import { NavLink } from "react-router-dom";
// import movieIcon from '../images/movieIcon.png';

function NavBar() {
  // console.log(movieIcon);
  
  return (
    <div className="NavBar grid">
      <ul>
        {/* <NavLink to="/">{movieIcon}</NavLink> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/register">Register</NavLink>
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
