import React from 'react';
import TextBars from './TextBars';

function AddExpenseContainer({ onAddSubmission }) {
  return (
    <div>
      <TextBars onAddSubmission={onAddSubmission} />
    </div>
  );
}

export default AddExpenseContainer;
