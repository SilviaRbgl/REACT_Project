import { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  // console.log("props >>>", props);
  const [user, setUser] = useState(null);

  const signUp = async (email, password, displayName) => {
    console.log("displayName, email, password", email, password, displayName);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );
      console.log("userCredentials>", userCredentials);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("error>", error);
    }
  };

  const logIn = async (email, password) => {
    console.log("email, password", email, password);
    try {
      const userLogIn = signInWithEmailAndPassword(auth, email, password)
      console.log("userLogIn", userLogIn)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("login error>", error)
      
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
