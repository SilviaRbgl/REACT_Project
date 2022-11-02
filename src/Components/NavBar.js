import React from "react";
import '../index.css';

function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li>HOME</li>
        <button
          onClick={() => console.log("you clicked logIn button")}
        >LOG IN</button>
      </ul>



    </div>
  );
}

export default NavBar;
