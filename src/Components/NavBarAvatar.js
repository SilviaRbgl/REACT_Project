import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import moviePopcorn from "../images/moviePopcorn.png";

function NavBarAvatar() {

    const { logOut } = useContext(AuthContext);

  return (
    <div>
        <img
        src={moviePopcorn}
        alt="Avatar Profile"
        className="Avatar">
        onClick={logOut}
        </img>
    </div>
  )
}

export default NavBarAvatar