// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyC4gbEB57_q9y1n-izuSMlIV6PgNsW0IRo",
  authDomain: "react-forms-300811.firebaseapp.com",
  projectId: "react-forms-300811",
  storageBucket: "react-forms-300811.appspot.com",
  messagingSenderId: "873912588082",
  appId: "1:873912588082:web:8472b84374bcf2d0b8a92b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;