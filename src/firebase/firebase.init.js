// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm6M1Slqs7z_cp65OCrlU5TFGvrkqLZoY",
  authDomain: "auth-firebase-context-4b000.firebaseapp.com",
  projectId: "auth-firebase-context-4b000",
  storageBucket: "auth-firebase-context-4b000.appspot.com",
  messagingSenderId: "99166382955",
  appId: "1:99166382955:web:6d6e877ba3c27d6324fa2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};