import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currQuesIdx, setCurrQuesIdx] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);

  const saveAnswer = (isCorrect, idx) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswer([...answer, idx]);

    setCurrQuesIdx((prev) => prev + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        user,
        setUser,
        currQuesIdx,
        answer,
        setAnswer,
        setCurrQuesIdx,
        saveAnswer,
        score,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
