import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home.page';
import Testing from './pages/testing.component'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={Testing} />
      </Switch>
    </Router>
  );
};

export default App;
