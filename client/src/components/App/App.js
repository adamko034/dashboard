import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/authActions";

import Dashboard from "../../layouts/Dashboard/Dashboard.js";

class App extends React.Component {
  componentDidMount() {
    console.log("componenet did mount app ");
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Dashboard} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
