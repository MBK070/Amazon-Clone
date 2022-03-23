import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAT-40PiAhojLJ-3gdcLPJKJtonXZiCmY",
  authDomain: "clone-2b22c.firebaseapp.com",
  projectId: "clone-2b22c",
  storageBucket: "clone-2b22c.appspot.com",
  messagingSenderId: "568293141469",
  appId: "1:568293141469:web:7b9cf2801c33aea0c42434",
  measurementId: "G-JW560VMNJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
