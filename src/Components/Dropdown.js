import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function Dropdown() {
  const { user, logOut } = useContext(AuthContext);

  function DropdownItem(props) {
    // console.log('props :>> ', props);
    return (
      <NavLink className="dropdown-item" to={props.page} onClick={props.logout}>
        {props.children}
      </NavLink>
    );
  }

  return (
    <div className="Dropdown">
      <DropdownItem page="/">Home</DropdownItem>
      <DropdownItem page="/movies">Search movies</DropdownItem>
      {/* <ProtectedRoute> */}
        <DropdownItem page="/profile">My Profile</DropdownItem>
      {/* </ProtectedRoute> */}
      { user ?  (
        <DropdownItem logout={logOut}>Log out</DropdownItem>
      ) : (
        <DropdownItem page="/login">Log in</DropdownItem>
      )
      }
    </div>
  );
}

export default Dropdown;
