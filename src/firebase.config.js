// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAdWHJFPxJzbdJtXEfkvkiBeKk7DC_uQSE",
//   authDomain: "practice-authentication-6ee07.firebaseapp.com",
//   projectId: "practice-authentication-6ee07",
//   storageBucket: "practice-authentication-6ee07.firebasestorage.app",
//   messagingSenderId: "952937020272",
//   appId: "1:952937020272:web:ee631995fe367343abedb5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// 



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdWHJFPxJzbdJtXEfkvkiBeKk7DC_uQSE",
  authDomain: "practice-authentication-6ee07.firebaseapp.com",
  projectId: "practice-authentication-6ee07",
  storageBucket: "practice-authentication-6ee07.firebasestorage.app",
  messagingSenderId: "952937020272",
  appId: "1:952937020272:web:ee631995fe367343abedb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);