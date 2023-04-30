import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCufl_4DZCAl8NRi9Q5RuG6uhWDu3G1Aac",
  authDomain: "blog-b3290.firebaseapp.com",
  projectId: "blog-b3290",
  storageBucket: "blog-b3290.appspot.com",
  messagingSenderId: "460150269123",
  appId: "1:460150269123:web:08ec57c6e07b66b977ae76"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};