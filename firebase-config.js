// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bp3IeepZQH3LjEGyLeAxZBjCc42oi8c",
  authDomain: "deface-ig.firebaseapp.com",
  databaseURL: "https://deface-ig-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "deface-ig",
  storageBucket: "deface-ig.firebasestorage.app",
  messagingSenderId: "897885400912",
  appId: "1:897885400912:web:80b8e743244266694ac655",
  measurementId: "G-5JJNYZJL27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();