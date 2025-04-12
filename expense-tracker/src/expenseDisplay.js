import React from 'react';

function ExpenseDisplay({ submissions }) {
  const expenseRows = submissions.map((submission) => (
    <tr key={submission.id}>
      <td>{submission.name}</td>
      <td>{submission.description}</td>
      <td>{submission.category}</td>
      <td>{submission.amount}</td>
      <td>{submission.date}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead className="table-head">
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>
    </div>
  );
}

export default ExpenseDisplay;

