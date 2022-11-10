import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  // console.log("props >>>", props);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const redirectTo = useNavigate();

  const signUp = async (email, password, displayName) => {
    console.log("displayName, email, password", email, password, displayName);
    try {
      const userSignUp = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );
      console.log("userCredentials>", userSignUp);
      setUser(userSignUp);
      redirectTo("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error>", error);
    }
  };

  const logIn = async (email, password) => {
    console.log("email, password", email, password);
    try {
      const userLogIn = await signInWithEmailAndPassword(auth, email, password)
      console.log("userLogIn", userLogIn)
      setUser(userLogIn);
      redirectTo("/movies");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("login error>", error)
      
    }
  }

  const checkIfUserIsLogged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user is logged in");
        setUser(user);
        setIsLoading(false);
      } else {
        console.log("user is NOT logged in");
        setUser(null);
        setIsLoading(false);
      }
    });
  }

  useEffect(() => {
    checkIfUserIsLogged()
  }, [])
  

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logIn, }}>
      {props.children}
    </AuthContext.Provider>
  );
};
