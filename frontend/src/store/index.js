import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import JWT from "jsonwebtoken";
import axios from "axios";
import { rootSaga } from "../sagas";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization";

axios.defaults.headers.common["Authorization"] = token;
const sagaMiddleware = createSagaMiddleware();
const initialState = {
  users: {
    token: token,
    valid: token ? true : false,
    id: token ? JWT.decode(token).sub.userId : null,
    type: token ? JWT.decode(token).sub.Type : "guest"
  }
};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
