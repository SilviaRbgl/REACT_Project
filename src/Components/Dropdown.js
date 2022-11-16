import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Dropdown() {
  const { user, logOut, handleDropdown } = useContext(AuthContext);
  const location = useLocation();
  console.log("location :>> ", location);
  function DropdownItem({ page, logout, children, hide }) {
    // console.log('logout dropdown :>> ', page);
    const goTo = useNavigate();
    const location = useLocation();

    const test = (e) => {
      e.preventDefault();
      if (!logout) {
        console.log("page :>> ", page);
        handleDropdown();
        goTo(`${page}`);
      } else {
        console.log("page :>> ", page);
        handleDropdown();
        logout();
        goTo(`${page}`);
      }
    };

    return (
      <NavLink className={`dropdown-item ${hide}`} onClick={(e) => test(e)}>
        {children}
      </NavLink>
    );
  }

  return (
    <div className="dropdown">
      {location.pathname !== "/" && <DropdownItem page="/">Home</DropdownItem>}
      <DropdownItem page="/movies">Search movies</DropdownItem>
      {user ? (
        <DropdownItem page="/profile">My Profile</DropdownItem>
      ) : (
        <DropdownItem hide="item-hide" page="/profile">
          My Profile
        </DropdownItem>
      )}
      {/* <DropdownItem page="/profile">My Profile</DropdownItem> */}
      {user ? (
        <DropdownItem logout={logOut}>Log out</DropdownItem>
      ) : (
        <DropdownItem page="/login">Log in</DropdownItem>
      )}
    </div>
  );
}

export default Dropdown;
