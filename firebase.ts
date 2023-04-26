
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIoEqMBKWErOuyAYEJAxgM7AbP9dA_vE0",
  authDomain: "my-project-70be7.firebaseapp.com",
  projectId: "my-project-70be7",
  storageBucket: "my-project-70be7.appspot.com",
  messagingSenderId: "729489385088",
  appId: "1:729489385088:web:8dd2ac28718d58bc8e6865",
  measurementId: "G-KJWG4L98VE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
