import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const UserInfo = () => {
  const { user, setUser } = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("vijay :", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="user-input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter your name..."
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </section>

      <section className="form-submit">
        <button type="submit">Next</button>
      </section>
    </form>
  );
};

export default UserInfo;
