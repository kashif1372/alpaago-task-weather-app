import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoLy5UrYuEkNAfN36orCswqvoTdrSIwho",
  authDomain: "fir-auth-72fdb.firebaseapp.com",
  projectId: "fir-auth-72fdb",
  storageBucket: "fir-auth-72fdb.appspot.com",
  messagingSenderId: "371661209491",
  appId: "1:371661209491:web:0c017b9da7f968d2843266",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
