import { useContext } from "react";
import { QuizContext } from "../context/QuizProvider";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { score } = useContext(QuizContext);
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Result</h1>

      <h4>Score - {score}</h4>

      <button onClick={() => navigate("/answer")}>Review Answer</button>
    </div>
  );
};

export default Result;
