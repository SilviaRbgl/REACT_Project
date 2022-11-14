import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

function ProfileUser() {
  const { user } = useContext(AuthContext);


  return (
    <div className="Container-Profile">
       <h3>Hello {user.displayName}</h3>
       <p>Your username: {user.displayName}</p>
       
       <p>Your email: {user.email}</p>
       <p>Your password: {user.password}</p>

       <p>Change your username:</p>
       <input type="text" placeholder="write here"></input>
       

    </div>
  )
}

export default ProfileUser