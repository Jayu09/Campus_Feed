import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
//importing component

const jwtToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = jwtToken;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
