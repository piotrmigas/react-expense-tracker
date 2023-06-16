import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/dataSlice';

type Props = {
  transaction: Transaction;
};

export default function Transaction({ transaction }: Props) {
  const dispatch = useDispatch();
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.name}{' '}
      <span>
        {sign}
        {Math.abs(transaction.amount)} PLN
      </span>
      <button className='delete-btn' onClick={() => dispatch(deleteTransaction(transaction.id))}>
        x
      </button>
    </li>
  );
}
