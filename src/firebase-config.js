import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkilz_FNWQjxQo3v2pnDld-2GQrlHDiGE",
  authDomain: "batshu-c203f.firebaseapp.com",
  projectId: "batshu-c203f",
  storageBucket: "batshu-c203f.appspot.com",
  messagingSenderId: "262372510224",
  appId: "1:262372510224:web:699a7f6cde0a1108731895",
  measurementId: "G-ZXKL83XJ32"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

