// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCkGzItuKGx_XJBZMfRM6NUt7XMeiKeLU4",
  authDomain: "angular-ecommerce-22bbe.firebaseapp.com",
  projectId: "angular-ecommerce-22bbe",
  storageBucket: "angular-ecommerce-22bbe.appspot.com",
  messagingSenderId: "306952987659",
  appId: "1:306952987659:web:235a0f120a9f8b5018930e",
  databaseURL: "https://angular-ecommerce-22bbe-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Realtime Database
export const database = getDatabase(app);