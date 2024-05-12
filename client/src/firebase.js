// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ffd96.firebaseapp.com",
  projectId: "mern-blog-ffd96",
  storageBucket: "mern-blog-ffd96.appspot.com",
  messagingSenderId: "727682185612",
  appId: "1:727682185612:web:fec17a13dfb39b8c2bfea9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);