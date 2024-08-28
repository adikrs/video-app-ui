// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMtYySOjuKnwvs5JwiftdZcqrlfg0OhEA",
  authDomain: "video-stream-f0954.firebaseapp.com",
  projectId: "video-stream-f0954",
  storageBucket: "video-stream-f0954.appspot.com",
  messagingSenderId: "647579309376",
  appId: "1:647579309376:web:ff11681a58824b16d656a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export default app;