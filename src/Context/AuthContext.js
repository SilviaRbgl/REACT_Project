import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  // console.log("props >>>", props);
  const [user, setUser] = useState(null);
  const redirectTo = useNavigate();

  const signUp = async (displayName, email, password,) => {
    console.log("displayName, email, password", email, password, displayName);
    try {
      const userSignUp = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
    
      updateProfile(auth.currentUser, {
        displayName: displayName, 
      }).then(() => {
        // Profile updated!
        // ...
        console.log("profile updated");
      }).catch((error) => {
        // An error occurred
        // ...
        console.log('ereror :>> ', error);
      });
      

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
      } else {
        console.log("user is NOT logged in");
        setUser(null);
      }
    });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      redirectTo("/")
    }).catch((error) => {
    });
  }

  useEffect(() => {
    checkIfUserIsLogged()
  }, [])
  

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
