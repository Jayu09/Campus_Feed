import React, { Component } from "react";
import "../../css/App.css";
//import logo
import notification1 from "../../svg/notification1.svg";
class AdminHeader extends Component {
  signout = async e => {
    await this.props.signOut();
  };
  render() {
    return (
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
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/AddAdmin">
                    Verify Admin
                  </a>
                  <a className="dropdown-item" href="/ViewAdmin">
                    View Admin
                  </a>
                  {console.log(this.props.type)}
                  {this.props.type === "SuperAdmin" ? (
                    <a className="dropdown-item" href="/DeleteAdmin">
                      Delete Admin
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Faculty
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/AddFaculty">
                    Verify Faculty
                  </a>
                  <a className="dropdown-item" href="/ViewFaculty">
                    View Faculty
                  </a>
                  <a className="dropdown-item" href="/DeleteFaculty">
                    Delete Faculty
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Student
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/AddStudent">
                    Verify Student
                  </a>
                  <a className="dropdown-item" href="/ViewStudent">
                    View Student
                  </a>
                  <a className="dropdown-item" href="/DeleteStudent">
                    Delete Student
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Event
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/AddEvent">
                    Add Event
                  </a>
                  <a className="dropdown-item" href="/Allow Event">
                    Allow Event
                  </a>
                  <a className="dropdown-item" href="/DeleteEvent">
                    Delete Event
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Syllabus
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/ViewSyllabus">
                    View Syllabus
                  </a>
                  <a className="dropdown-item" href="/ChangeSyllabus">
                    Change Syllabus
                  </a>
                  <a className="dropdown-item" href="/AllowChanges">
                    Allow Change
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="form-inline list-unstyled my-2 my-lg-0">
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
    );
  }
}
export default AdminHeader;
