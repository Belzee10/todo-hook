import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Lorem ipsum",
      isCompleted: false
    },
    {
      text: "Lorem ipsum1",
      isCompleted: false
    },
    {
      text: "Lorem ipsum2",
      isCompleted: false
    }
  ]);

  const handleAddTodo = text => {
    const newTodos = [
      ...todos,
      {
        text
      }
    ];
    setTodos(newTodos);
  };

  const handleCompleteTodo = index => {
    const NewTodos = [...todos];
    NewTodos[index].isCompleted = !NewTodos[index].isCompleted;
    setTodos(NewTodos);
  };

  const handleDeleteTodo = index => {
    const NewTodos = [...todos];
    NewTodos.splice(index, 1);
    setTodos(NewTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) => (
          <Todo
            key={index}
            todo={item}
            index={index}
            completeTodo={handleCompleteTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))}
        <TodoForm addTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
