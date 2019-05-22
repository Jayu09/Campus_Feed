import { combineReducers } from "redux";
import postRed from "./PostRed";
import UserRed from "./UserRed";
import AdminRed from "./AdminRed";
export default combineReducers({
  posts: postRed,
  users: UserRed,
  admins: AdminRed
});
