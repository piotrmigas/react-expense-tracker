type Props = {
  transactions: Transaction[];
};

export default function Balance({ transactions }: Props) {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your balance:</h4>
      <h1 id='balance'>{total} PLN</h1>
    </>
  );
}
