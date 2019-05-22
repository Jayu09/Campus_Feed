import React, { Component } from "react";
import "../css/App.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      email1: "",
      password: "",
      password1: "",
      password2: "",
      Type: ""
    };
    this.change = this.change.bind(this);
  }
  resetState = () => {
    this.setState({ name: "", email: "", password: "", password2: "" });
  };
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick = async e => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        Type: this.state.Type
      };
      await this.props.addUser(user);
    } else {
      alert("password not same");
      this.setState({ password: "", password2: "" });
    }
  };
  handleLoginClick = async e => {
    e.preventDefault();
    if (this.state.password1 && this.state.email1) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      await this.props.loginUser(user);
    } else {
      alert("Fill Email and Password");
      this.setState({ password: "", email: "" });
    }
  };
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
                <label className="font-weight-bold label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.change}
                  placeholder="name"
                />
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
                <label className="font-weight-bold label">Type</label>
                <select
                  required
                  className="btn btn-block border"
                  name="Type"
                  onChange={this.change}
                >
                  <option value="" disabled selected>
                    Type
                  </option>
                  <option value="admin">Admin</option>
                  <option value="faculty">Faculty</option>
                  <option value="student">Student</option>
                </select>
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
              <div className="form-group">
                <label className="font-weight-bold label">
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  onChange={this.change}
                  placeholder="verify password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={e => this.handleClick(e)}
              >
                Sign Up
              </button>
              <a className="row" href="/Login">
                <u>Already Registered? Login</u>
              </a>
            </form>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    );
  }
}
