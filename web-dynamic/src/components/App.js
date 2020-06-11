import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import { Login } from '../views/Login';
import { Home } from '../views/Home';
import { Layout } from './Layout';
import { NewProject } from '../views/NewProject';
import { ProjectPage } from '../views/ProjectPage';
import {NewTask} from '../views/NewTask';
import {TaskPage} from '../views/TaskPage';
import {AllProjects} from '../views/AllProjects';
import { NotFound } from '../views/Page404';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/NotFound" component={NotFound} />
        <Layout>
          <Route exact path="/Home" component={Home} />
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
