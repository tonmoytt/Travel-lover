// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3Hu68u6D1EyC8_wGM2ua7vxJkpaYH9M",
  authDomain: "travel-lovers-tt.firebaseapp.com",
  projectId: "travel-lovers-tt",
  storageBucket: "travel-lovers-tt.appspot.com",
  messagingSenderId: "546267832090",
  appId: "1:546267832090:web:7a63c970d8feccff7916a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;