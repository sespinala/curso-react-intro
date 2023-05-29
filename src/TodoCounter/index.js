import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h1 className='TodoCounter'>
      You have completed <span>{completedTodos} </span>
      of <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
