
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC239HYyGwLaJ1nNGV_fti9yMabTzmnHLo",
  authDomain: "clone-d2f12.firebaseapp.com",
  projectId: "clone-d2f12",
  storageBucket: "clone-d2f12.appspot.com",
  messagingSenderId: "238023407022",
  appId: "1:238023407022:web:56733195b5ff05be8dc43f",
  measurementId: "G-FN44GSRXEE"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

export default firebaseConfig;