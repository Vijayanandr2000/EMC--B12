import { useNavigate } from "react-router-dom";

const Instruction = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/quiz");
  };

  return (
    <div className="container">
      <h1>Instruction</h1>
      <p>React the questions carefully and select the correct answer</p>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Instruction;
