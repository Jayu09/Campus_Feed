import React, { Component } from "react";
//import { connect } from "react-redux";
//import proptypes from "prop-types";
//import { loginUser } from "../actions/UserAction";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email@example.com",
      password: "password"
    };
    this.change = this.change.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleClick(e) {
    e.preventDefault();
    await this.props.loginUser(this.state);
    if (!this.props.error) {
      this.props.history.push("/Post");
    }
  }
  render() {
    return (
      <div className="input-group mb-3">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">9Am-10Am</th>
              <th scope="col">10Am-11Am</th>
              <th scope="col">11Am-12Pm</th>
              <th scope="col">12Pm-1Pm</th>
              <th scope="col">1Pm-1:30Pm</th>
              <th scope="col">1:30Pm-2:30Pm</th>
              <th scope="col">2:30Pm-3:30Pm</th>
              <th scope="col">3:30Pm-4:30Pm</th>
              <th scope="col">4:30Pm-5:30Pm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Monday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">Tuesday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">Wednesday</th>
              <td colspan="2" />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">Thursday</th>
              <td colspan="2" />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">Friday</th>
              <td colspan="2" />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th scope="row">Saturday</th>
              <td colspan="2" />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TimeTable;
