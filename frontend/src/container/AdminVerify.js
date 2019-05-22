import { connect } from "react-redux";
import AdminVerify from "../component/AdminVerify";

const mapStateToProps = state => ({
  users: state.admins.list,
  msg: state.users.msg
});

const mapDispatchToProps = dispatch => {
  return {
    verifyAdmin: payload => dispatch({ type: "ADMINVERIFY", payload })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminVerify);
