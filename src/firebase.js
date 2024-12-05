import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCImrDiYzCRPMpN2GOyYdxEvrrczhHTAC0",
  authDomain: "practica2-1c78c.firebaseapp.com",
  databaseURL: "https://practica2-1c78c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "practica2-1c78c",
  storageBucket: "practica2-1c78c.appspot.com",
  messagingSenderId: "282410030421",
  appId: "1:282410030421:web:59eeddcb3723c90e3d0bdc",
  measurementId: "G-8CWWG6MD0B"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();