import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs6khv8CfzMRUBQeiZbFZ8ls8kaVhTfqo",
  authDomain: "redux-movies-17580.firebaseapp.com",
  projectId: "redux-movies-17580",
  storageBucket: "redux-movies-17580.appspot.com",
  messagingSenderId: "444826808701",
  appId: "1:444826808701:web:ad434d8dadee92c62ddc14",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
