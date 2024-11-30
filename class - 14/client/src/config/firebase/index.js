import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-JBqQV3W2DpBU3TdkbkMDZ1z9kWfUuDY",
  authDomain: "login-app-20833.firebaseapp.com",
  projectId: "login-app-20833",
  storageBucket: "login-app-20833.firebasestorage.app",
  messagingSenderId: "807954975386",
  appId: "1:807954975386:web:54cf2d98ffb7f6405e6d23",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
