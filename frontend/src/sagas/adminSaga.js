import * as effect from "redux-saga/effects";
import * as typ from "../actions";
import * as adminapi from "../api/apiAdmin";
export function* getAdminList(action) {
  try {
    const api = yield effect.call(adminapi.getAdmin, action.payload);
    yield effect.put({ type: typ.VIEWADMINLIST, payload: api });
  } catch (err) {
    throw err;
  }
}
export function* verifyAdmin(action) {
  try {
    const api = yield effect.call(adminapi.verifyAdmin, action.payload);
    yield effect.put({ type: typ.ADDNEWADMIN, payload: api });
  } catch (err) {
    throw err;
  }
}
