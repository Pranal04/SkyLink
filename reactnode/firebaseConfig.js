// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8C3iivDssoOKUphlNnfv4YrYzyuemdx0",
  authDomain: "skylink-d3e89.firebaseapp.com",
  projectId: "skylink-d3e89",
  storageBucket: "skylink-d3e89.firebasestorage.app",
  messagingSenderId: "798220841871",
  appId: "1:798220841871:web:1673ab24b9b82318fed1fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);