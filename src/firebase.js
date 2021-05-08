import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBG5pnYxjRz6-IRLXJt-An1gm_10Vs3WgI",
  authDomain: "tinder-clone-fbeac.firebaseapp.com",
  projectId: "tinder-clone-fbeac",
  storageBucket: "tinder-clone-fbeac.appspot.com",
  messagingSenderId: "614515270352",
  appId: "1:614515270352:web:0986f6a7f62510b8e2f4d5",
  measurementId: "G-2QP44RZG41",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
