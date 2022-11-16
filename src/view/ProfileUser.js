import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdEdit, MdAlternateEmail, MdDelete } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";

function ProfileUser() {
  const { user, updateProfile, handleDeleteUser } = useContext(AuthContext);

  return (
    <div className="container-profile">
      <h3>Contact information</h3>
      <p ><HiUser /> Your username: {user.displayName}</p>
      <p><MdEdit /> Change username:</p>
      <input type="text" placeholder="write here"></input>
      <button className="button" onClick={updateProfile}>
        <FiCheck />
      </button>
      <p><MdAlternateEmail /> Your email: {user.email}</p>
      <p><RiLockPasswordFill /> Your password: {user.password}</p>
      <p>Delete account?</p>
      <button className="button" onClick={handleDeleteUser}>
        <MdDelete />
      </button>
      
    </div>
  );
}

export default ProfileUser;