import React, { Component } from "react";
import { connect } from "react-redux";
import ListPosts from "../Posts/ListPosts";
import Login from "../Auth/Login";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        {isAuthenticated ? <ListPosts /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
