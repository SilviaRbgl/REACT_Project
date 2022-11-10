import React, { useState } from "react";

function NavBarItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a href="#" className="button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
      
    </li>
  );
}

export default NavBarItem;
