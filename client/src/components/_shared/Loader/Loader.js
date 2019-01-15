import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  containerCenter: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  progressCenter: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const Loader = props => {
  const { center, classes } = props;
  const centerContainerClass = center ? classes.containerCenter : '';
  const centerProgressClass = center ? classes.progressCenter : '';

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
