import { createContext, useState, useContext, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  });

  const loginWithEmailAndPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
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

  const value = { user, error, loading, loginWithEmailAndPassword, logout };

  return <authContext.Provider value={value} {...props} />;
}
