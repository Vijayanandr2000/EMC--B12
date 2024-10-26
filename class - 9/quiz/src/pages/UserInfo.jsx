import React, { useContext } from "react";
import { QuizContext } from "../context/QuizProvider";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { user, setUser } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("vijay :", user);

    navigate("/instruction");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>User Information</h2>

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
    </div>
  );
};

export default UserInfo;
