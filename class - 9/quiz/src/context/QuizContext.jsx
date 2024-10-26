import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ childern }) => {
  const [user, setUser] = useState(null);

  return (
    <QuizContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {childern}
    </QuizContext.Provider>
  );
};
