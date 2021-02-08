import React, { useState } from "react";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../config/fire";

function SignIn() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="signIn">
      <div className="signIn__heading">
        <h1>Welcome to Voice Prescription</h1>
      </div>
      <div className="signIn__card">
        <h2 className="signIn__cardtitle">Doctor's Login</h2>
        <button onClick={signIn} className="signIn__button">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
