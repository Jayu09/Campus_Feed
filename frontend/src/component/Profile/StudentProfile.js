import React, { Component } from "react";
import "../css/App.css";
//import Component
import Profile from "../Profile";
//import logo
import notification1 from "../svg/notification1.svg";
class StudentScreen extends Component {
  signout = async e => {
    await this.props.signOut();
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://www.dauniv.ac.in/">
            <img
              border="0"
              className="App-logo"
              alt="Navbar"
              src="favicon.ico"
              width="100"
              height="100"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <a className="nav-link active" href="/TimeTable">
                  <u>Time Table</u>
                </a>
              </li>
              <li>
                <a className="nav-link active" href="/Syllabus">
                  <u>Syllabus</u>
                </a>
              </li>
              <li>
                <a className="nav-link active" href="/CourseStatus">
                  <u>Course Status</u>
                </a>
              </li>
            </ul>
            <ul className="form-inline list-unstyled my-2 my-lg-0">
              <li>
                <a className="nav-link active" href="/Profile">
                  Profile
                </a>
              </li>
              <li>
                <a className="nav-link active" href="/Messages">
                  Message
                </a>
              </li>
              <li>
                <a className="notification" href="/Notification">
                  <img
                    src={notification1}
                    className="App-notification rounded-circle"
                    alt="notification"
                  />
                  <span className="badge">3</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.signout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </nav>
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
export default StudentScreen;
