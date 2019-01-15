import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/commonStyles";
import classnames from "classnames";

const Loader = props => {
  const { center, classes } = props;
  const centerContainerClass = center
    ? classnames(classes.containerCenter, classes.height100)
    : "";
  const centerProgressClass = center ? classes.innerCenter : "";

  return (
    <div className={centerContainerClass}>
      <CircularProgress
        className={centerProgressClass}
        disableShrink
        size={50}
      />
    </div>
  );
};

export default withStyles(styles)(Loader);
