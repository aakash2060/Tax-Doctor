import React from "react";
import { signInWithGoogle } from "../config/firebase";
import "../pages/Login.css";
export const Login = () => {
  const css = {
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "bold",
    margin: "50px 0",
    color: "red",
  };
  return (
    <>
      <div style={css}>
        Login
        <button
          type="button"
          class="loginWithGoogle"
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </button>
      </div>
    </>
  );
};
