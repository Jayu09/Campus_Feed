import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    checkAuth() {
      if (!this.props.users) {
        return this.props.history.push("/SignIn");
      } else if (this.props.users && this.props.type === "guest") {
        return this.props.history.push("/Guest");
      } else if (this.props.users && this.props.type === "faculty") {
        return this.props.history.push("/Faculty");
      } else if (
        this.props.users &&
        (this.props.type === "admin" && this.props.type === "SuperAdmin")
      ) {
        return this.props.history.push("/Admin");
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      users: state.users.valid,
      type: state.users.type
    };
  }

  return connect(mapStateToProps)(MixedComponent);
};
