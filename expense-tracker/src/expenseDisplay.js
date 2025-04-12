import React from 'react'
import TextBars from './TextBars'

function expenseDisplay(props) {

  return (
    <div>
      <table>
        <thead class="table-head">
         <tr>    
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{submission.name}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.price}</td>
                <td>{expense.Date}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default expenseDisplay
