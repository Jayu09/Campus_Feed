import { connect } from "react-redux";
import Post from "../component/Home";

const mapStateToProps = state => ({
  posts: state.posts.items,
  types: state.users.type,
  user: state.users
});

const mapDispatchToProps = dispatch => {
  return {
    viewPosts: () => dispatch({ type: "POST" }),
    markCompleted: id => dispatch({ type: "POST_COMPLETED", id: id }),
    markSeen: id => dispatch({ type: "POST_SEENED", id: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
