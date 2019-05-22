import { connect } from "react-redux";
import AdminHeader from "../component/Headers/AdminHeader";

const mapStateToProps = state => {
  return {
    error: state.users.error,
    users: state.users.valid,
    type: state.users.type
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
)(AdminHeader);
