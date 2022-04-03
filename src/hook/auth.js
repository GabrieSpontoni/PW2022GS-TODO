import { createContext, useState, useContext, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "../config/firebase-config";

const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  });

  const createUser = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: displayName,
        })
          .then((usr) => {
            console.log("User profile updated");
          })
          .catch((error) => {
            console.log("Error updating user profile");
          });
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const loginWithEmailAndPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.code);
        setLoading(false);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const value = {
    user,
    error,
    loading,
    loginWithEmailAndPassword,
    logout,
    createUser,
  };

  return <authContext.Provider value={value} {...props} />;
}
