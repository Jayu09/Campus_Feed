import { connect } from "react-redux";
import GuestHeader from "../component/Headers/GuestHeader";
//import { loginUser } from "../actions/actionFunc";

const mapStateToProps = state => {
  return {
    error: state.users.error,
    users: state.users.valid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({ type: "LOG_OUT" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestHeader);
