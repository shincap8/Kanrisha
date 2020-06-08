import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import { Login } from '../views/Login';
import { HomeManager } from '../views/HomeManager';
import { HomeFreelancer } from '../views/HomeFreelancer';
import { Layout } from './Layout';
import { NewProject } from '../views/NewProject';
import { ProjectPage } from '../views/ProjectPage';
import {NewTask} from '../views/NewTask';
import {TaskPage} from '../views/TaskPage';
import {AllProjects} from '../views/AllProjects';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/HomeManager" component={HomeManager} />
          <Route exact path="/HomeFreelancer" component={HomeFreelancer} />
          <Route exact path="/AllProjects" component={AllProjects} />
          <Route exact path="/NewProject" component={NewProject} />
          <Route exact path="/ProjectPage" component={ProjectPage} />
          <Route exact path="/NewTask" component={NewTask} />
          <Route exact path="/TaskPage" component={TaskPage} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
