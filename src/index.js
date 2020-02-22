import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import dataReducer from "./redux/dataReducer";

const middleware = [thunk];

const initialState = {
  transactions: []
};

const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App transactions={initialState} />
  </Provider>,
  document.getElementById("root")
);
