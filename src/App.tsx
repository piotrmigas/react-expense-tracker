import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { selectTransactions } from './redux/dataSlice';
import { useSelector } from 'react-redux';

function App() {
  const transactions = useSelector(selectTransactions);
  return (
    <>
      <h2>Expense Tracker</h2>
      <div className='container'>
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        {transactions.length > 0 && <TransactionList transactions={transactions} />}
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
