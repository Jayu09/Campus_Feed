import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing component
import Register from "./container/Register";
import Home from "./container/Home";
import Login from "./container/Login";
import TimeTable from "./component/TimeTable";
import AdminList from "./container/AdminList";
import AdminVerify from "./component/AdminVerify";
//importing HOCs
import LogoutAuth from "./component/HOCs/logoutAuth";

const jwtToken = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = jwtToken;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={LogoutAuth(Register)} />
        <Route exact path="/Login" component={LogoutAuth(Login)} />
        <Route exact path="/TimeTable" component={TimeTable} />
        <Route exact path="/AddAdmin" component={AdminList} />
        <Route exact path="/AdminVerify" component={AdminVerify} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
