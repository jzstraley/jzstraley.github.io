import { hideLoginError, showLoginState, showLoginForm, showApp, showLoginError, btnLogin, btnLogout, txtEmail, txtPassword} from './ui';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged, signOut,} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js';
//import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
//import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

//Firebase configuration
const firebaseConfig2 = {
  apiKey: process.env.apiKey,
  authDomain:  process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId:  process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId:  process.env.messagingSenderId,
  appId:  process.env.appId,
  measurementId: process.env.measurementId
}
const app = initializeApp(firebaseConfig2);
const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
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
};

// Log out
const logout = async () => {
  await signOut(auth);
};

btnLogin.addEventListener("click", loginEmailPassword);
btnLogout.addEventListener("click", logout);

// Firebase Auth Emulator
//connectAuthEmulator(auth, "http://localhost:9099");
monitorAuthState();