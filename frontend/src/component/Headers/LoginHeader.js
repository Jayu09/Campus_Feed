import React, { Component } from "react";
import "../../css/App.css";

class LoginHeader extends Component {
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
              <a className="nav-link active" href="/Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default LoginHeader;
