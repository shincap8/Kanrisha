import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import { Login } from '../views/Login';
import { HomeManager } from '../views/HomeManager';
import { Layout } from './Layout';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/HomeManager" component={HomeManager} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
