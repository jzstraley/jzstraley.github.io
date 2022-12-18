/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLEuS73i5lhIARRCbD_MkDp-DPXoMoJGQ",
  authDomain: "imteched-f4f40.firebaseapp.com",
  databaseURL: "https://imteched-f4f40-default-rtdb.firebaseio.com",
  projectId: "imteched-f4f40",
  storageBucket: "imteched-f4f40.appspot.com",
  messagingSenderId: "40812159280",
  appId: "1:40812159280:web:d4aeeebd2b847f891528f5",
  measurementId: "G-0ZX5STFS60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const config = {
    apiKey: "AIzaSyBLEuS73i5lhIARRCbD_MkDp-DPXoMoJGQ",
    authDomain: "imteched-f4f40.firebaseapp.com",
    databaseURL: "https://imteched-f4f40-default-rtdb.firebaseio.com",
    projectId: "imteched-f4f40",
    storageBucket: "imteched-f4f40.appspot.com",
    messagingSenderId: "40812159280",
    appId: "1:40812159280:web:d4aeeebd2b847f891528f5",
    measurementId: "G-0ZX5STFS60"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }