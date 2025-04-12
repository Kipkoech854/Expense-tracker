import React from 'react';
import DeleteButton from './DeleteButton';

function ExpenseDisplay({ submissions, handleDelete}) {
  const expenseRows = submissions.map((submission) => (
    <tr key={submission.id}>
      <td>{submission.name}</td>
      <td>{submission.description}</td>
      <td>{submission.category}</td>
      <td>{submission.price}</td>
      <td>{submission.date}</td>
      <DeleteButton id={submission.id} handleDelete={handleDelete} />

    </tr>
  ));
  function grandTotal(submissions) {
    function getPrices(submissions) {
      return submissions.map((entry) => Number(entry.price ));
    }
  
    const prices = getPrices(submissions);
    const total = prices.reduce((acc, curr) => acc + curr, 0);
  
    return total;
  }
  const totalPrice = grandTotal(submissions)
  
  return (
    <div>
      <table>
        <thead className="table-head">
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{expenseRows}
            
        </tbody>
      </table>
      <div id ="total">
        {totalPrice}
      </div>
    </div>
  );
}

export default ExpenseDisplay;
