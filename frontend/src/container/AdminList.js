import { connect } from "react-redux";
import AdminList from "../component/AdminList";

const mapStateToProps = state => ({
  users: state.admins.list
});

const mapDispatchToProps = dispatch => {
  return {
    getAdmins: () => dispatch({ type: "ADMINLIST" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminList);
