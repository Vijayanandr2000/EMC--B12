import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("vijay");
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted...!");

    console.log({
      name,
      count,
    });

    return () => {
      console.log("Component UnMounted...!");
    };
  }, [name, count]);

  return (
    <div className="App">
      <h1>{name}</h1>

      <button
        onClick={() => {
          // value = "anand";
          setName(() => {
            return "anand";
          });

          setCount((prev) => prev + 1);

          setCount((prev) => prev + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;

// insta

// /login ->
// /prrofile
// /login
