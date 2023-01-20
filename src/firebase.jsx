// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyizIWRQkNkHqTT0k4PupeIvs1ZEwQoJI",
  authDomain: "hamburgueria-f4ba0.firebaseapp.com",
  projectId: "hamburgueria-f4ba0",
  storageBucket: "hamburgueria-f4ba0.appspot.com",
  messagingSenderId: "427892419006",
  appId: "1:427892419006:web:8d3a62995cb161a14ab1ef",
  measurementId: "G-BFMHVM6K8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {auth, db, storage}
