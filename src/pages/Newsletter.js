import React, { useState } from "react";
import { db, signInWithGoogle } from "../config/firebase"; // Adjust the path according to your project structure
import { collection, addDoc } from "firebase/firestore";
import "./Newsletter.css";
import googleSignInImg from "../assets/web_dark_rd_SI@2x.png";
 export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = async () => {
    try {
      // Validate email format (basic validation)
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      // Add subscriber to Firestore
      await addDoc(collection(db, "subscribers"), { email });

      setSubscribed(true);
      setError(null);
      setEmail(""); // Clear input after successful subscription
    } catch (err) {
      setError("Failed to subscribe. Please try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      setEmail(user.email);
      await subscribe();
    } catch (err) {
      setError("Failed to sign in with Google. Please try again later.");
    }
  };

  return (
    <div className="newsletter-subscription" style={{padding:'100px'}}>
      <h2>Subscribe to Our Newsletter!</h2>
      {subscribed ? (
        <p className="success-message">Thank you for subscribing!</p>
      ) : (
        <>
          <p>Stay up-to-date with our latest news and updates.</p>
          <div className="two"><div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button onClick={subscribe}>Subscribe</button>
          </div></div>
          
          <img
            src={googleSignInImg}
            alt="Sign in with Google"
            onClick={handleGoogleSignIn}
            className="google-signin"
          />
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
};


export default Newsletter;