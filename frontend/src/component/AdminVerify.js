import React, { Component } from "react";
import "../css/App.css";
import Modal from "react-responsive-modal";

class AdminVerify extends Component {
  state = {
    open: false,
    Id: this.props.UserId,
    Name: this.props.UserName,
    FatherName: "",
    EmployeeId: "",
    MotherName: "",
    LocalAddress: "",
    PermanentAddress: "",
    contact: "",
    Designation: "",
    Qualification: ""
  };
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    this.props.verifyAdmin(this.state);
    window.location.reload();
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} className="btn">
          Verify Admin
        </button>

        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-header ">
            <h5 className="modal-title" id="exampleModalLabel">
              Admin Verification
              <div className="row m-1 ">
                <div className="col-6">{this.state.Name} </div>
              </div>
            </h5>
          </div>
          <div className="row m-1 ">
            <div className="col-6">Employee Id</div>
            <div className="col-6">
              <input name="EmployeeId" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1 ">
            <div className="col-6">Father Name</div>
            <div className="col-6">
              <input name="FatherName" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-6">Mother Name</div>
            <div className="col-6">
              <input name="MotherName" onChange={this.change} />
            </div>
          </div>

          <div className="row m-1">
            <div className="col-6">Permanent Address</div>
            <div className="col-6">
              <input name="PermanentAddress" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-6">Local Address</div>
            <div className="col-6">
              <input name="LocalAddress" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-6">contact</div>
            <div className="col-6">
              <input name="contact" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-6">Qualification</div>
            <div className="col-6">
              <input name="Qualification" onChange={this.change} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-6">Designation</div>
            <div className="col-6">
              <input name="Designation" onChange={this.change} />
            </div>
          </div>
          <div />
          <div className="modal-footer ">
            <button
              type="submit"
              className="m-1 p-1 btn btn-primary"
              onClick={this.handleClick}
            >
              Update Profile
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.onCloseModal}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
export default AdminVerify;
