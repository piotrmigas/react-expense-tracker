import Transaction from './Transaction';

type Props = {
  transactions: Transaction[];
};

export default function TransactionList({ transactions }: Props) {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
