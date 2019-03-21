import React from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Undo" : "Mark as complete"}
        </button>
        <button onClick={() => deleteTodo(index)} className="danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
