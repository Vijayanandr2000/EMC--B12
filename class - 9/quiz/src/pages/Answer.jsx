import { useContext } from "react";
import { QuizContext } from "../context/QuizProvider";
import { questions } from "../data/questions";

const Answer = () => {
  const { answer } = useContext(QuizContext);

  return (
    <div className="container">
      <h1>Answer</h1>

      {questions.map((question, i) => {
        return (
          <>
            <h3>{question.text}</h3>
            {question.options.map((option, idx) => {
              return (
                <button
                  className={`answer-button ${
                    question.answer === idx
                      ? "correct"
                      : answer[i] === idx
                      ? "incorrect"
                      : ""
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Answer;
