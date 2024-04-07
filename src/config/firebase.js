// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAhWDI-iL7vsLqlI6ybyYOIitLEx8hytps",
  authDomain: "tax-doctor-np.firebaseapp.com",
  projectId: "tax-doctor-np",
  storageBucket: "tax-doctor-np.appspot.com",
  messagingSenderId: "165528151784",
  appId: "1:165528151784:web:91151528f796169b0dcb5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInWithGoogle =() => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    const newUser = result.user.newUser;

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic",profilePic )
    localStorage.setItem("newUser", newUser )
    localStorage.setItem("name", name)

  })
    .catch((error) => {
    console.log(error);
  });
};

