import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Button from "../_shared/Button/Button";
import { withStyles } from "@material-ui/core/styles";
import { logout } from "../../actions/authActions";
import styles from "./headerStyles";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountMenuAnchorEl: null
    };
  }

  handleAccountMenuClicked = event => {
    this.setState({ accountMenuAnchorEl: event.currentTarget });
  };

  handleAccountMenuClose = () => {
    this.setState({ accountMenuAnchorEl: null });
  };

  renderWelcome(auth, classes) {
    if (auth) {
      const { accountMenuAnchorEl } = this.state;
      return (
        <div>
          <IconButton
            aria-owns={accountMenuAnchorEl ? "accountMenu" : undefined}
            onClick={this.handleAccountMenuClicked}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="accountMenu"
            anchorEl={accountMenuAnchorEl}
            open={Boolean(accountMenuAnchorEl)}
            onClose={this.handleAccountMenuClose}
          >
            <MenuItem className={classes.menuItem}>Settings</MenuItem>
            <MenuItem className={classes.menuItem}>
              <a href="/api/logout/">Logout</a>
            </MenuItem>
          </Menu>
        </div>
      );
    }

    return <Button href="/auth/google">Login With Google</Button>;
  }

  render() {
    const { classes, auth } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Dashboard
            </Typography>
            {this.renderWelcome(auth, classes)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(Header));
