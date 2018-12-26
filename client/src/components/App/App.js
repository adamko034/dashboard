import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/authActions";

import Dashboard from "../../layouts/Dashboard/Dashboard.js";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
