import React, { Component } from "react";
import "../css/App.css";

import "../css/Suggestions.css";
import AdminVerify from "../container/AdminVerify";
class AdminList extends Component {
  componentWillMount() {
    this.props.getAdmins();
  }
  sendRequest = e => {
    const req = {
      email: e.target.id,
      name: e.target.name,
      _id: e.target.value
    };
    this.props.request(req);
  };
  render() {
    const Items =
      this.props.users &&
      this.props.users.map(user => (
        <ul key={user._id} className="list-unstyled p-2 m-1">
          <li>
            <div className="row bg-secondary">
              <div className="m-2 col-sm-3">{user.name}</div>
              <div className="m-2 col-sm-4">{user.email}</div>
              <AdminVerify UserId={user._id} UserName={user.name} />
            </div>
          </li>
        </ul>
      ));
    return (
      <div
        className="align-self-center bg-transparent container overflow-auto "
        opacity="0.5"
      >
        {Items}
      </div>
    );
  }
}
export default AdminList;
