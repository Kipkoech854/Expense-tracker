import './App.css'
import React, { useState } from 'react';
import Header from './Header';
import AddExpenseContainer from './addExpenseContainer';
import SearchBar from './searchBar';
import ExpenseDisplay from './expenseDisplay';

function App() {
  const [submissions, setSubmissions] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddSubmission = (formData) => {
    const newEntry = { id: nextId, ...formData };
    setSubmissions((prev) => [...prev, newEntry]);
    setNextId((prev) => prev + 1);
  };

  const filteredSubmissions = submissions.filter((entry) =>
    [entry.name, entry.description, entry.category, entry.price, entry.date]
      .some(field => field?.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const handleDelete = (idToDelete) => {
    setSubmissions(prev => prev.filter(entry => entry.id !== idToDelete));
  };
  

  return (
    <div className="App">
      <Header submissions={submissions} />
      <AddExpenseContainer onAddSubmission={handleAddSubmission} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseDisplay submissions={searchTerm ? filteredSubmissions : submissions} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
