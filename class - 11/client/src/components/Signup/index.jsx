import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/signup`;

    try {
      const response = await axios.post(url, user);
      console.log("vijay :", response);

      if (response.status === 201) {
        setErr("");
        navigate("/");
      }
    } catch (error) {
      const errMsg = error.response.data.message;
      setErr(errMsg);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </section>
        <section>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </section>

        <button type="submit">Sign Up</button>
      </form>

      {err && <h2>{err}</h2>}
      <p>
        Have an account? <Link to="/">Log in</Link>
      </p>
    </>
  );
};

export default Signup;
