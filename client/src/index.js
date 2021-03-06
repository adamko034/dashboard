import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import reducers from "./reducers";

import "./assets/css/main.css";
import App from "./components/App/App.js";

const store = createStore(
  reducers,
  {
    color: "red"
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
