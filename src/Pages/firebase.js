// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyD8MEWAEpb_v9fs_gFVceX2btNOBQgI8r0',
  authDomain:'netflix-react-yt-ef23a.firebaseapp.com',
  projectId: 'netflix-react-yt-ef23a',
  storageBucket: 'netflix-react-yt-ef23a.appspot.com',
  messagingSenderId:'515567796609',
  appId: '1:515567796609:web:badfb7b3cf217ecb156880'
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
