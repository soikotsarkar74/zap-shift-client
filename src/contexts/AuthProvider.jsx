

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth } from "../firebase/firebaseinit";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
  // Observe user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    googleSignIn,
    logOut,
    updateUserProfile, 
    resetPassword
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


// import React, { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext/AuthContext";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase/firebaseinit";

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Register
//   const registerUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Login
//   const signInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // Google Login
//   const googleSignIn = () => {
//     return signInWithPopup(auth, googleProvider);
//   };

//   // Logout
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // Observe user state
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     registerUser,
//     signInUser,
//     googleSignIn,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;