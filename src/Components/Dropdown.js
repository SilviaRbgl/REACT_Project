import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Dropdown() {
  function DropdownItem(props) {
    console.log('props :>> ', props);
    return <NavLink className="dropdown-item" to={props.page}>{props.children}</NavLink>;
  }

  const clickHome = useNavigate();
//   const goHome = () => {
//     clickHome("/");
//   };

  return (
    <div className="Dropdown">
      
      <DropdownItem page="/">Home</DropdownItem>
      <DropdownItem page="/movies">Search movies</DropdownItem>
      <DropdownItem page="/login">Log in</DropdownItem>
    </div>
  );
}

export default Dropdown;
