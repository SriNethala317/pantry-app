// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKisqM__V70NBGDPwJBk5aKHs_oext7wY",
  authDomain: "pantry-app-60503.firebaseapp.com",
  projectId: "pantry-app-60503",
  storageBucket: "pantry-app-60503.appspot.com",
  messagingSenderId: "643373114225",
  appId: "1:643373114225:web:fad282bba1b90f17914cd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore};