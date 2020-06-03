import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import { Login } from '../views/Login';
import { HomeManager } from '../views/HomeManager';
import { Layout } from './Layout';
import { NewProject } from '../views/NewProject';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/HomeManager" component={HomeManager} />
          <Route exact path="/NewProject" component={NewProject} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
