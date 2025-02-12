// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ8TWPGTUPpsh6Jygr9gjmz-DZD5XdLxs",
  authDomain: "netflix-gpt-ca9b8.firebaseapp.com",
  projectId: "netflix-gpt-ca9b8",
  storageBucket: "netflix-gpt-ca9b8.firebasestorage.app",
  messagingSenderId: "324988744626",
  appId: "1:324988744626:web:4240643bb93a69a8f96aab",
  measurementId: "G-WME5NBCDFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
