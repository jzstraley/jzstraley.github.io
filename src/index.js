import './styles.css';
import { hideLoginError, showLoginState, showLoginForm, showApp, showLoginError, btnLogin, btnSignup, btnLogout, txtEmail, txtPassword} from './ui'
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut,} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

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

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value
  const password = txtPassword.value

  try {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  catch(error) {
    console.log(`There was an error: ${error}`)
    showLoginError(error)
  } 
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user)
      showApp()
      showLoginState(user)

      hideLoginError()
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
btnSignup.addEventListener("click", createAccount)
btnLogout.addEventListener("click", logout)

const auth = getAuth(firebaseApp);
// Firebase Auth Emulator
connectAuthEmulator(auth, "http://localhost:9099");

monitorAuthState();




const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage = 'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute('hidden');
    userPicElement.removeAttribute('hidden');
    signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    signInButtonElement.setAttribute('hidden', 'true');

  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute('hidden', 'true');
    userPicElement.setAttribute('hidden', 'true');
    signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    signInButtonElement.removeAttribute('hidden');
  }
}

// Returns true if user is signed-in. Otherwise false and displays a message.
function checkSignedInWithMessage() {
  // Return true if the user is signed in Firebase
  if (isUserSignedIn()) {
    return true;
  }
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}

// Shortcuts to DOM Elements.
var submitButtonElement = document.getElementById('submit');
var mediaCaptureElement = document.getElementById('mediaCapture');
var userPicElement = document.getElementById('user-pic');
var userNameElement = document.getElementById('user-name');
var signInButtonElement = document.getElementById('sign-in');
var signOutButtonElement = document.getElementById('sign-out');
var signInSnackbarElement = document.getElementById('must-signin-snackbar');

// Detect Auth State
onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log('Logged in!');
  } else {
    console.log('No user');
  }
}); 