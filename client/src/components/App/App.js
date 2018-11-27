import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../../layouts/Dashboard/Dashboard.js";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
