export const deleteTransaction = id => dispatch => {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
};

export const addTransaction = transaction => dispatch => {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction
  });
};

export const handleChange = (value, field) => {
  return {
    type: "HANDLE_CHANGE",
    payload: value,
    field
  };
};
