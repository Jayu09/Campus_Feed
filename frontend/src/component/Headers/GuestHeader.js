import React, { Component } from "react";
import "../../css/App.css";
import notification1 from "../../svg/notification1.svg";

class GuestHeader extends Component {
  render() {
    // signout = async e => {
    //   //      await this.props.signOut();
    // };
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
              <a className="nav-link active" href="/Course">
                <u>Courses</u>
              </a>
            </li>
            <li>
              <a className="nav-link active" href="/Gallery">
                <u>Image Gallery</u>
              </a>
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
                //  onClick={this.signout}
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
export default GuestHeader;
