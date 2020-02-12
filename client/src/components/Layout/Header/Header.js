import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreVert from "@material-ui/icons/MoreVert";
import { logoutUser } from "../../../actions/authActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import "./Header.css";

const styles = {
  root: {
    flexGrow: 1
  },
  space: {
    justifyContent: "space-between"
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout() {
    this.setState({ anchorEl: null });
    this.props.logoutUser();
  }
  render() {
    const { classes, isAuthenticated } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const guestLinks = (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-hashpopup="true"
          color="inherit"
          onClick={this.handleMenu}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="menu-appbar"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/register">Register</Link>
          </MenuItem>
        </Menu>
      </div>
    );
    const authLinks = (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-hashpopup="true"
          color="inherit"
          onClick={this.handleMenu}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>
            <Link to="/#" onClick={this.handleLogout}>
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#ff0000" }}>
          <Toolbar className={classes.space}>
            <Link className="logo" to="/">
              NoQuitters
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logoutUser })(
  withStyles(styles)(Header)
);
