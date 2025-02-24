import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCMszzMowNXt4j0sWMwdkKWNtg8DFxRzI",
    authDomain: "lmr-oops-3b619.firebaseapp.com",
    projectId: "lmr-oops-3b619",
    storageBucket: "lmr-oops-3b619.firebasestorage.app",
    messagingSenderId: "798675650798",
    appId: "1:798675650798:web:b89f9cc6d8a5cc5a434bff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
