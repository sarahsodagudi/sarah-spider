import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Jobs from './Jobs';
import About from './About';
import JobDetails from './JobDetails';
import AddJob from './AddJob';
import EditJob from './EditJob';

const Main = () => (
  <main>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Jobs} />
      <Route exact path='/about' component={About} />
      <Route exact path='/jobs/add' component={AddJob} />
      <Route exact path='/jobs/edit/:id' component={EditJob} />
      <Route exact path='/jobs/:id' component={JobDetails} />
    </Switch>
    </BrowserRouter>
  </main>
)

export default Main;