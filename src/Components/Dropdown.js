import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Dropdown() {
  const { user, logOut, handleDropdown } = useContext(AuthContext);

  function DropdownItem({page, logout, children, hide}) {
    // console.log('logout dropdown :>> ', page);
    const goTo= useNavigate()
    const test = (e)=> {
      e.preventDefault()
      if(!logout) {
        handleDropdown()
        goTo(page)
      } else {
        handleDropdown()
        logout()
        goTo(page)
      }
      
      
    }
    return (
      <NavLink className={`dropdown-item ${hide}`} onClick={(e)=>test(e)} >
        {children}
      
      </NavLink>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem page="/"  >Home</DropdownItem>
      <DropdownItem page="/movies" >Search movies</DropdownItem>
      {user ? (
        <DropdownItem page="/profile">My Profile</DropdownItem>
      ) : (
        <DropdownItem className="item-hide" hide="item-hide"  page="/profile">My Profile</DropdownItem>
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
