import React, { useContext } from "react";
import '../index.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import movieIcon from '../images/movieIcon.png';
import { AuthContext } from "../Context/AuthContext";

function NavBar() {
  const { user, setUser } = useContext(AuthContext);

  const clickLogin = useNavigate();
  const goLogin = () => {
    clickLogin("/login");
  };

  return (
    <div className="NavBar grid">
      <ul>
        {/* <img src={movieIcon} alt="logo"/> */}
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/movies">Movies</NavLink>{" "}
        <button
          className="Button"
          onClick={goLogin}
        >LOG IN</button>
      </ul>
    </div>
  );
}

export default NavBar;
