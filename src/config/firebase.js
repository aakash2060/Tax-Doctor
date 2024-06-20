import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const profilePic = user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);

      return user;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
