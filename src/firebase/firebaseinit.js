

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA0ADMPGAT8sYT0Cw7JMpf4d4E1xl1Ns_s",
//   authDomain: "zap-shift-19f46.firebaseapp.com",
//   projectId: "zap-shift-19f46",
//   storageBucket: "zap-shift-19f46.firebasestorage.app",
//   messagingSenderId: "213010212208",
//   appId: "1:213010212208:web:1e1e7eabe181708d4e9bb5",
//   measurementId: "G-40CM3H1W4G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);



// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectid,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

// const app = initializeApp(firebaseConfig);

// //export const analytics = getAnalytics(app);

// export const auth = getAuth(app);