import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import movieIcon from "../images/movieIcon.png";
import { AuthContext } from "../Context/AuthContext";


function NavBar(props) {
  const { user, setUser, logOut } = useContext(AuthContext);

  const clickLogin = useNavigate();
  const goLogin = () => {
    clickLogin("/login");
  };

  return (
    <nav className="NavBar grid">
      <ul>{ props.children }
        {/* <img src={movieIcon} alt="logo"/> */}
        {/* <NavLink to="/">Home</NavLink> <NavLink to="/movies">Movies</NavLink>{" "} */}
        {/* {user ? (
          // <button className="Button" onClick={logOut}>
          //   LOG OUT
          // </button>
          // <div className="Dropdown">
          //   <button className="Button">Hello user</button>
          //   <div className="dropdown-menu">
          //     <Link href="#">Link 1 </Link>
          //     <Link href="#">Link 2 </Link>
          //   </div>    
          // </div>
          
        ) : (
          <button className="Button" onClick={goLogin}>
            LOG IN
          </button>
        )} */}
      </ul>
    </nav>
  );
}

export default NavBar;
