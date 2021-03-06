import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import dataReducer from "./redux/dataReducer";
import throttle from "lodash/throttle";

let initialState = {
  transactions: []
};

const persistedState = localStorage.getItem("transactions");
if (persistedState) {
  initialState = JSON.parse(persistedState);
}

const store = createStore(
  dataReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    localStorage.setItem("transactions", JSON.stringify(store.getState()));
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
