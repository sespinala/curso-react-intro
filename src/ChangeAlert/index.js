import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
