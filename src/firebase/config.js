// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";
import "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH5kLpKCKiShvHTl6cYZa0w9i95HF8-vU",
  authDomain: "moviepop-e8304.firebaseapp.com",
  projectId: "moviepop-e8304",
  storageBucket: "moviepop-e8304.appspot.com",
  messagingSenderId: "832440837287",
  appId: "1:832440837287:web:9d0cdecbc24e5504c12782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase database
const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export { app, db, googleAuthProvider, auth };