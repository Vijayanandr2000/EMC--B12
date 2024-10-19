import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        value: todoValue,
        checked: false,
      },
    ]);
    setTodoValue("");
  };

  const handleChangeCheckBox = (idx) => {
    todos[idx] = {
      value: todos[idx].value,
      checked: !todos[idx].checked,
    };
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>TO-DO APP</h3>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => {
            const { value } = e.target;
            setTodoValue(value);
          }}
        />
        <button>Add Todo</button>
      </form>

      <section>
        <ul>
          {todos.map((todo, idx) => {
            return (
              <li key={idx}>
                <input
                  type="checkbox"
                  onChange={() => handleChangeCheckBox(idx)}
                />
                <span className={todos[idx].checked ? "checked" : ""}>
                  {todo.value}
                </span>
                <button
                  onClick={() => {
                    todos.splice(idx, 1);
                    setTodos([...todos]);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
