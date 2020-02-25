export const deleteTransaction = id => {
  return {
    type: "DELETE_TRANSACTION",
    payload: id
  };
};

export const addTransaction = transaction => {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction
  };
};

export const handleChange = (value, field) => {
  return {
    type: "HANDLE_CHANGE",
    payload: value,
    field
  };
};
