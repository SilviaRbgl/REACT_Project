import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  // console.log("props >>>", props);
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    console.log("email, password", email, password);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        updateProfile(auth.displayName)
      );
      console.log("userCredentials>", userCredentials);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("error>", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};
