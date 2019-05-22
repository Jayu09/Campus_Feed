import React, { Component } from "react";
//import Show from "./Show";
import PostForm from "../container/PostForm";
import Timeline from "../container/Timeline";

export default class Home extends Component {
  render() {
    return (
      <div>
        {this.props.user && this.props.type !== "guest" ? null : (
          <PostForm className="row fixed-position" />
        )}
        <Timeline className="row fixed-position" />
      </div>
    );
  }
}
