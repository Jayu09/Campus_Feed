import { connect } from "react-redux";
import Register from "../component/Register";

const mapStateToProps = state => {
  return {
    error: state.users.error,
    users: state.users.valid,
    msg: state.users.msg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch({ type: "ADD_USER", payload: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
