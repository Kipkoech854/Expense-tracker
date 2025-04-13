import React from 'react';
import './App.css'

function Header({ submissions }) {
  function grandTotal(submissions) {
    const prices = submissions.map((entry) => Number(entry.price));
    return prices.reduce((acc, curr) => acc + curr, 0);
  }

  const totalPrice = grandTotal(submissions);

  return (
    <div class="App-header">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and your life. Record, categorize and analyze your spending</p>
      <div id="total">
        Total Spent: ksh{totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default Header;
