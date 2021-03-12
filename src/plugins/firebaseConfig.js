import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgQpMg9F3dVMSosNI-1JiAV1NV8XARsZI",
  authDomain: "leb9-cloud-firestore.firebaseapp.com",
  projectId: "leb9-cloud-firestore",
  storageBucket: "leb9-cloud-firestore.appspot.com",
  messagingSenderId: "581633146069",
  appId: "1:581633146069:web:e46f4bc1206d1ca89e765c",
  measurementId: "G-3M4FSVW640"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const db = firebase.firestore();
export const auth = firebase.auth();
