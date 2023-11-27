// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl4edpUk6tmI22cLNN3MnvAX0iBHGxdHo",
  authDomain: "tde-mobile-ea749.firebaseapp.com",
  databaseURL: "https://tde-mobile-ea749-default-rtdb.firebaseio.com",
  projectId: "tde-mobile-ea749",
  storageBucket: "tde-mobile-ea749.appspot.com",
  messagingSenderId: "437733419379",
  appId: "1:437733419379:web:888c766220a15e3b44fd06"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);