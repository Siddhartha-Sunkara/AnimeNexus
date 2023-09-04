// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBauGIIFRL8Z4v7sQUxOomwV7MZE97QfVQ",
  authDomain: "animenexus-944a6.firebaseapp.com",
  projectId: "animenexus-944a6",
  storageBucket: "animenexus-944a6.appspot.com",
  messagingSenderId: "939940027486",
  appId: "1:939940027486:web:78cf6c68acbf8e234b28cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
