import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddExpenseContainer from './addExpenseContainer';
import SearchBar from './searchBar';
import ExpenseDisplay from './expenseDisplay';

function App() {
  const [submissions, setSubmissions] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAddSubmission = (formData) => {
    const newEntry = {
      id: nextId,
      ...formData,
    };
    setSubmissions((prev) => [...prev, newEntry]);
    setNextId((prev) => prev + 1);
  };
  return (
    <div className="App">
      <Header className="App-header"/>
      <AddExpenseContainer className="addexpense-container" onAddSubmission={handleAddSubmission}/>
      <SearchBar/>
      <ExpenseDisplay submissions={submissions}/>
    </div>
  );
}

export default App;
