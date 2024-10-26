import React, { useContext, useEffect, useState } from "react";
import { questions } from "../data/questions";
import { QuizContext } from "../context/QuizProvider";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const { currQuesIdx, saveAnswer } = useContext(QuizContext);
  const navigate = useNavigate();
  const question = questions[currQuesIdx];

  const handleClick = (idx) => {
    const isCorrect = question.answer === idx;

    console.log("vijay :", {
      isCorrect,
      idx,
      answer: question.answer,
    });
    saveAnswer(isCorrect, idx);

    if (currQuesIdx === questions.length - 1) {
      navigate("/result");
    }
  };

  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer <= 0) {
      clearInterval(timerId);
      navigate("/result");
    }

    return () => clearInterval(timerId);
  }, [timer]);

  const formatTime = (timer) => {
    const m = Math.floor(timer / 60);
    const s = timer % 60;

    return `${m}:${s}`;
  };

  return (
    <div className="container">
      <h1 className="timer">Time Left: {formatTime(timer)}</h1>
      <h3>{question.text}</h3>

      {question.options.map((option, idx) => {
        return (
          <button
            className="answer-button"
            key={idx}
            onClick={() => handleClick(idx)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Quiz;
