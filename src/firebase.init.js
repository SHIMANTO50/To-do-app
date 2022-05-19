// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqWD5onOdwhGExKJEeo92nLwLpW01Mm0w",
    authDomain: "todo-205b4.firebaseapp.com",
    projectId: "todo-205b4",
    storageBucket: "todo-205b4.appspot.com",
    messagingSenderId: "198953143776",
    appId: "1:198953143776:web:b251a4a24f149f7809ef85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;