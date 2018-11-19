import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../../layouts/Dashboard/Dashboard.js';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
