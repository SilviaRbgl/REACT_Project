import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function NavBarItem(props) {
  // console.log('props :>> ', props);
  // const [open, setOpen] = useState(false);
  const { handleDropdown, open } = useContext(AuthContext);


  // const handleDropdown = () => setOpen(!open)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={handleDropdown}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default NavBarItem;
