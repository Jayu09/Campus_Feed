import { connect } from "react-redux";
import Login from "../component/App";
//import { loginUser } from "../actions/actionFunc";

const mapStateToProps = state => {
  return {
    error: state.users.error,
    users: state.users.valid,
    type: state.users.type
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch({ type: "LOGIN_USER", payload: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
