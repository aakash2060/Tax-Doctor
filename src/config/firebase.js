// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHVjW9M1M2oGVGVRuQ22Gl_rY_aVRc2HA",
  authDomain: "learn-react-bf73f.firebaseapp.com",
  projectId: "learn-react-bf73f",
  storageBucket: "learn-react-bf73f.appspot.com",
  messagingSenderId: "357454504251",
  appId: "1:357454504251:web:fb68f14ab3f04740e2971e",
  measurementId: "G-7M28PE02VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);