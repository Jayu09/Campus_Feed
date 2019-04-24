import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light App-header">
      <a className="navbar-brand" href="http://www.dauniv.ac.in/"><img border="0" className="App-logo" alt="Navbar" src="favicon.ico" width="100" height="100"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="nav"></nav>
    </nav>
    <div className="container-fluid p-0">
    <div className="row">
    <div className="col-sm-2 pl-0 menu">
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">HOME</button>
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">ABOUT US</button>
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">FACILITIES</button>
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">FACULTIES</button>
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">PLACEMENT CELL</button>
    <button className="btn  btn-lg btn-secondary m-2 btn-block row">SOCIAL ACTIVITIES</button>
    </div>
    <div className="col-sm-8 ">

    </div>
    <div className="col-sm-2 bg-secondary">
    </div>
    </div>
    </div>
      </div>
    );
  }
}

export default App;
