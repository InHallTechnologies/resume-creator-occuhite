// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6wJt5swBiIwJs0e1ANDuUlJ5DFYPDnQs",
  authDomain: "occuhire-tequed-labs.firebaseapp.com",
  databaseURL: "https://occuhire-tequed-labs-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "occuhire-tequed-labs",
  storageBucket: "occuhire-tequed-labs.appspot.com",
  messagingSenderId: "634670493520",
  appId: "1:634670493520:web:f413440e41f5bc269a8655",
  measurementId: "G-2EVTF84R05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
// const analytics = getAnalytics(app);