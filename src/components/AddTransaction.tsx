import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../redux/dataSlice';

export default function AddTransaction() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
    };
    dispatch(addTransaction(newTransaction));
    setName('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Title</label>
          <input
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter transaction name...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            name='amount'
            type='number'
            pattern='[0-9]*'
            value={amount}
            onChange={(e) => setAmount((v) => (e.target.validity.valid ? e.target.value : v))}
            placeholder='Enter amount...'
            step='.01'
          />
        </div>
        <button disabled={!name || Number(amount) === 0} className='submit-btn'>
          Add transaction
        </button>
      </form>
    </>
  );
}
