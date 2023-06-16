import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type InitialState = {
  transactions: Transaction[];
};

const initialState: InitialState = {
  transactions: [],
};

export const slice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions = state.transactions.concat(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((transaction) => transaction.id !== action.payload);
    },
  },
});

export const { addTransaction, deleteTransaction } = slice.actions;

export const selectTransactions = (state: RootState) => state.transactions;

export default slice.reducer;
