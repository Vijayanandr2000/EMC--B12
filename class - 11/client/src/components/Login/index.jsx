import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/login?email=${user.email}&password=${user.password}`;

    try {
      const response = await axios.get(url);
      console.log("vijay login:", response);

      if (response.status === 200) {
        handleLogin();
        setErr("");
        navigate("/home");
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

        <button type="submit">Login</button>
      </form>
      {err && <h2>{err}</h2>}

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default Login;
