import {
  drawerWidth,
  transition,
  container
} from '../../assets/jss/material-dashboard/material-dashboard-react.js';

const styles = theme => ({
  dashboardContainer: {
    width: '90%',
    margin: '0 auto'
  },
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh'
  },
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    // overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
    padding: '20px 10px',
    minHeight: 'calc(100vh - 123px)'
  },
  container,
  map: {
    marginTop: '70px'
  }
});

export default styles;
