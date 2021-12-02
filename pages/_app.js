import "../styles/globals.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdvRbGskziixYLGqMymRRJWEoFdNk9vag",
  authDomain: "gjyoga-2834e.firebaseapp.com",
  projectId: "gjyoga-2834e",
  storageBucket: "gjyoga-2834e.appspot.com",
  messagingSenderId: "584151008000",
  appId: "1:584151008000:web:30caf281da0731efa7a9e5",
  measurementId: "G-1G3CSBC5YR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
