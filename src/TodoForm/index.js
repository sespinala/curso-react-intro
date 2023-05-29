import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TODO</label>
      <textarea
        placeholder='Create a React project'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button 
                    TodoForm-button--cancel'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='TodoForm-button 
                    TodoForm-button--add'
        >
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
