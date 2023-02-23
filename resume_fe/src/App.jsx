import { Box } from "@mui/system";
import { useState } from "react";
import "./App.scss";
import MyAppBar from "./components/surfaces/AppBar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import CvList from "./components/surfaces/CvList";
import CardsView from "./components/Views/CardView";

const firebaseConfig = {
  apiKey: "AIzaSyD5H59psUeHYYRskYHhi2ENu8wnPSpng0E",
  authDomain: "resu-me-82b0e.firebaseapp.com",
  projectId: "resu-me-82b0e",
  storageBucket: "resu-me-82b0e.appspot.com",
  messagingSenderId: "1086660385551",
  appId: "1:1086660385551:web:4075cc47987de95e597c7a",
  measurementId: "G-H1K5YNT0N8",
};

// Initialize Firebase

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const signInWithCredentials = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const createAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logout = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="App">
      <MyAppBar
        authState={user}
        handleLogin={signInWithGoogle}
        handleCredentials={signInWithCredentials}
        handleSignUp={createAccount}
        handleLogout={logout}
      ></MyAppBar>
      <Box sx={{ p: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CvList></CvList>
        </Box>

        <CardsView></CardsView>
      </Box>
      <Fab
        elevation={0}
        sx={{
          m: 3,
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "3px solid black",
          boxShadow: "0px 0px",
          bgcolor: "white",
        }}
        aria-label="add"
        color="inherit"
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
