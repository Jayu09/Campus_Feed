import React, { Component } from "react";
import "../css/SignUp.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-4" />
          <div className="card col-sm-4 signUp mt-5">
            <form className="card-body ">
              <div className="form-group">
                {this.props.error ? (
                  <div className="alert alert-danger">{this.props.error}</div>
                ) : this.props.msg ? (
                  <div className="alert alert-warning">
                    Successfully Registered
                    {this.resetState}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <label className="font-weight-bold label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.change}
                  placeholder="example@email.com"
                />
              </div>
              <div className="form-group">
                <label className="font-weight-bold label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.change}
                  placeholder="password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={e => this.handleClick(e)}
              >
                Sign In
              </button>
              <a className="row" href="/Register">
                <u>Not Registered?</u>
              </a>
            </form>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}
export default Login;
