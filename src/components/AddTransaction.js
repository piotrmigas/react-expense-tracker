import React from "react";
import { connect } from "react-redux";
import { addTransaction, handleChange } from "../redux/dataActions";

const AddTransaction = ({ addTransaction, amount, name, handleChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount
    };
    addTransaction(newTransaction);
    e.target.reset();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            onChange={e => handleChange(e.target.value, "name")}
            placeholder="Enter name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            onChange={e => handleChange(e.target.value, "amount")}
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  name: state.name,
  amount: state.amount
});

export default connect(mapStateToProps, { addTransaction, handleChange })(AddTransaction);
