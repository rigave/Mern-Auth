// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-18f13.firebaseapp.com",
  projectId: "mern-auth-18f13",
  storageBucket: "mern-auth-18f13.appspot.com",
  messagingSenderId: "1019538893241",
  appId: "1:1019538893241:web:24f22b73561528496fae68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
