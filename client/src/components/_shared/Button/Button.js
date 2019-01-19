import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Button as ButtonMui } from "@material-ui/core";

import styles from "./buttonStyles.js";

const Button = props => {
  const { classes, color, children, href } = props;
  const buttonColorCssClass = classes[color];

  return (
    <ButtonMui href={href} variant="contained" className={buttonColorCssClass}>
      {children}
    </ButtonMui>
  );
};

function mapStateToProps({ color }) {
  return { color };
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["red", "blue"])
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Button));
