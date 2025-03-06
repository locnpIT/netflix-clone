/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD3yFCqLdBBAz0oIX4Si5b7VmikfDAOBh0",
  authDomain: "netflix-clone-18f12.firebaseapp.com",
  projectId: "netflix-clone-18f12",
  storageBucket: "netflix-clone-18f12.firebasestorage.app",
  messagingSenderId: "441611763946",
  appId: "1:441611763946:web:9ff5a164dec507aa9c5793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }catch(error){ 
        console.log(error);
        alert(error);
    }

}

const login = async (email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout =  () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};