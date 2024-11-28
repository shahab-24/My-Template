import {
    AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import {auth} from '../firebase.config';

export const AuthContext = createContext (null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState (null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword (auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth)
  }

  useEffect (() => {
    const unSubscribe = onAuthStateChanged (auth, currentUser => {
      console.log ('user', currentUser);

      if (currentUser) {
        setUser (currentUser);
      } else {
        setUser (null);
      }
    });
    return () => {
      unSubscribe ();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    signOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
