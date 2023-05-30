import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      You have completed <span>{completedTodos} </span>
      of <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
