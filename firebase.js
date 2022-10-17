import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase/database";
import admin  from "firebase-admin";
import {getAuth} from 'firebase-admin/auth'
const apiKey = process.env.VITE_API_KEY;
// const stringKey = JSON.parse(apiKey)
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// var admin = require("firebase-admin");
import {serviceAccount} from './serviceAccount.js'; 
console.log(typeof(apiKey))
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chatapp-a8732-default-rtdb.firebaseio.com"
});


// Initialize Realtime Database and get a reference to the service
// export const database = getDatabase(app);
export const auth = getAuth(app);