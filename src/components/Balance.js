import React from "react";
import { connect } from "react-redux";

const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your balance:</h4>
      <h1 id="balance">{total} EUR</h1>
    </>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(Balance);
