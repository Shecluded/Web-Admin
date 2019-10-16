import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "shecluded",
  storageBucket: "shecluded.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSANGER_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
const firebaseApp = firebase.initializeApp(config);
export const storage = firebase.storage();
export const auth = firebase.auth();
export const functions = firebase.functions();
export default firebaseApp.firestore();
