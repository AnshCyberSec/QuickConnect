// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC18XyW4wWOW4MT3YC2DNaQUDnixXrAeak",
  authDomain: "vite-contact-b05da.firebaseapp.com",
  projectId: "vite-contact-b05da",
  storageBucket: "vite-contact-b05da.firebasestorage.app",
  messagingSenderId: "209559353070",
  appId: "1:209559353070:web:7a912a276128a52bf1a5ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);