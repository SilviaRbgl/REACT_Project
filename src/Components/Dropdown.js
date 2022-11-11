import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Dropdown() {
  function DropdownItem(props) {
    return <a className="dropdown-item">{props.children}</a>;
  }

  const clickHome = useNavigate();
  const goHome = () => {
    clickHome("/");
  };

  return (
    <div className="Dropdown">
      <DropdownItem href="/">Home</DropdownItem>
      <DropdownItem href="/movies">Search movies</DropdownItem>
      <DropdownItem onClick={goHome}>Log in</DropdownItem>
    </div>
  );
}

export default Dropdown;
