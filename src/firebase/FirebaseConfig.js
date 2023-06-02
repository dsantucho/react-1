// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ8IBoSk79lKqueI7tE9ydkAkBNC-U66M",
  authDomain: "react-1-d6b12.firebaseapp.com",
  projectId: "react-1-d6b12",
  storageBucket: "react-1-d6b12.appspot.com",
  messagingSenderId: "129645930903",
  appId: "1:129645930903:web:0958d59361dbb0aac67cd2",
  measurementId: "G-6ZEZFV04K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
