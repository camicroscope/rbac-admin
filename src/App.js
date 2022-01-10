import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** import navbar component */
import { Navbar } from './components/navbar';
import { DashboardPage } from './pages/dashboard';
/** import all pages into application */
import { HomePage } from './pages/homepage';

const App = function () {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
