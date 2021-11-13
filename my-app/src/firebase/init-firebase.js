import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFjIYE3bxnHSYhHnTC-G-exN1bJDE4NuY",
  authDomain: "linkedin-clone-f0999.firebaseapp.com",
  projectId: "linkedin-clone-f0999",
  storageBucket: "linkedin-clone-f0999.appspot.com",
  messagingSenderId: "420083675764",
  appId: "1:420083675764:web:d1cccf7f262034b8125721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
