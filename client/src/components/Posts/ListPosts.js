import React, { Component } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

class ListPost extends Component {
  render() {
    return (
      <div>
        <AddPost />
        <h1>Listo</h1>
        This is the ListPost Page
        <Post />
      </div>
    );
  }
}

export default ListPost;
