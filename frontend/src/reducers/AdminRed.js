import { VIEWADMINLIST, ADDNEWADMIN } from "../actions";

const initialState = {
  valid: false,
  token: "",
  error: "",
  id: "",
  items: [],
  profile: {},
  list: [],
  msg: "",
  notification: [],
  type: "guest"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIEWADMINLIST:
      return {
        ...state,
        list: action.payload
      };
    case ADDNEWADMIN:
      return {
        ...state,
        msg: action.payload.msg,
        err: action.payload.err
      };
    default:
      return state;
  }
}
