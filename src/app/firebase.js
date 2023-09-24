// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
import 'firebase/firestore';
// import { firestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXfqZj_E5vCqsOQa9I__W-sOLKehxdbcI",
  authDomain: "animenexus-da403.firebaseapp.com",
  projectId: "animenexus-da403",
  storageBucket: "animenexus-da403.appspot.com",
  messagingSenderId: "660708796891",
  appId: "1:660708796891:web:ddcf16d0befbde48199ffe",
  measurementId: "G-FC1ZE5NHH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db  = getFirestore(app); 
const config = { app, db };
export default config;