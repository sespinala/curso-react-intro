import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert(sincronize) {
  const { show, toggleShow } = useStorageListener(sincronize);
  
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>
            Looks like you uptaded your TODOs on another browser's tab or window.
          </p>
          <p>Would you like yo sincronize your TODOs?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
