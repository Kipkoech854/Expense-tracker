import React from 'react';
import TextBars from './TextBars';
import './App.css'

function AddExpenseContainer({ onAddSubmission }) {
  return (
    <div id="adding-container">
      <TextBars onAddSubmission={onAddSubmission} />
    </div>
  );
}

export default AddExpenseContainer;
