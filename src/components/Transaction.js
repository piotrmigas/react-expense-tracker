import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../redux/dataActions";

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)} EUR
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};

export default connect(null, { deleteTransaction })(Transaction);
