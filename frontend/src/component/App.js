import React, { Component } from "react";
import "../css/App.css";
//import Component
import Profile from "./Profile";
//import Header
import LoginHeader from "../container/LoginHeader";
import StudentHeader from "../container/StudentHeader";
import AdminHeader from "../container/AdminHeader";
import FacultyHeader from "../container/FacultyHeader";
import GuestHeader from "../container/GuestHeader";
//import logo
import notification1 from "../svg/notification1.svg";
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.users ? (
          this.props.type === "student" ? (
            <StudentHeader />
          ) : this.props.type === "faculty" ? (
            <FacultyHeader />
          ) : this.props.type === "guest" ? (
            <GuestHeader />
          ) : (
            <AdminHeader />
          )
        ) : (
          <LoginHeader />
        )}
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-2 pl-0 menu">
              <a
                href="/"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                HOME
              </a>
              <a
                href="/Falcilities"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                FACILITIES
              </a>
              <a
                href="/Faculties"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                FACULTIES
              </a>
              <a
                href="/Career"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                CAREER
              </a>
              <a
                href="/social_life"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                SOCIAL ACTIVITIES
              </a>
              <a
                href="/abouts"
                className="btn  btn-lg btn-secondary m-2 btn-block row"
              >
                ABOUT US
              </a>
            </div>
            <div className="col-sm-8 overflow-auto">{this.props.children}</div>
            <div className="col-sm-2 menu">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
