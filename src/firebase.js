import firebase from "firebase"

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEgIpNbvIq__zUssguErnI4hp2LJWDWuQ",
  authDomain: "netflix-49f12.firebaseapp.com",
  projectId: "netflix-49f12",
  storageBucket: "netflix-49f12.appspot.com",
  messagingSenderId: "778845666090",
  appId: "1:778845666090:web:f52525365faebf88727c53"
};

// Initialize Firebase
// const app = 
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export default storage