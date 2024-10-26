import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Instruction from "./pages/Instruction";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Answer from "./pages/Answer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/answer" element={<Answer />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
