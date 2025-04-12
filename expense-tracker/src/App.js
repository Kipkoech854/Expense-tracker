import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddExpenseContainer from './addExpenseContainer';
import SearchBar from './searchBar';
import ExpenseDisplay from './expenseDisplay';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <AddExpenseContainer className="addexpense-container"/>
      <SearchBar/>
      <ExpenseDisplay/>
    </div>
  );
}

export default App;
