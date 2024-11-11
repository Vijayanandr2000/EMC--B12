import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Unautheticated from "./components/Unautheticated";
import InvalidPage from "./components/InvalidPage";
import { useState } from "react";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> | <Link to="/signup">Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={isLogged ? <Home /> : <Unautheticated />}
        />

        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
