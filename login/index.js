import { hideLoginError, showLoginState, showLoginForm, showApp, showLoginError, btnLogin, btnLogout, txtEmail, txtPassword} from './ui'
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut,} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js';
//import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
//import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBLEuS73i5lhIARRCbD_MkDp-DPXoMoJGQ",
  authDomain: "imteched-f4f40.firebaseapp.com",
  databaseURL: "https://imteched-f4f40-default-rtdb.firebaseio.com",
  projectId: "imteched-f4f40",
  storageBucket: "imteched-f4f40.appspot.com",
  messagingSenderId: "40812159280",
  appId: "1:40812159280:web:d4aeeebd2b847f891528f5",
  measurementId: "G-0ZX5STFS60"
});

// Login w/Email/Password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  
  try{
  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
};
// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showApp()
      hideLoginError()
      showLoginState(user)
    }
    else {
      showLoginForm()
      lblAuthState.innerHTML = `You're not logged in.`
    }
  })
}

// Log out
const logout = async () => {
  await signOut(auth);
}

btnLogin.addEventListener("click", loginEmailPassword);
btnLogout.addEventListener("click", logout)

const auth = getAuth(firebaseApp);
// Firebase Auth Emulator
connectAuthEmulator(auth, "http://localhost:9099");
monitorAuthState();