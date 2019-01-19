import React from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";

import styles from "./paperItemStyles.js";

const PaperItem = ({ classes, children }) => {
  return <Paper className={classes.paper}>{children}</Paper>;
};

PaperItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperItem);
