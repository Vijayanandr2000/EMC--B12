import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { auth, provider } from "../../config/firebase";
import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      setUser(user);
    } catch (error) {
      setUser(null);
      console.log("Error while signing in...", error.message);
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setUser(null);
      console.log("Error while signing out...", error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => subscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Firebase Authentication App using Google Provider</h1>
      {user ? (
        <>
          <h1>Hi {user.displayName}</h1>
          <button style={{ padding: "10px 20px" }} onClick={handleSignOut}>
            Sign out
          </button>
        </>
      ) : (
        <button style={{ padding: "10px 20px" }} onClick={handleSignIn}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
