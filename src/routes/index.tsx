import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import User from '../pages/User';
import Organization from '../pages/Organization';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/user/:user+" component={User} />
    <Route path="/organization/:org+" component={Organization} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
