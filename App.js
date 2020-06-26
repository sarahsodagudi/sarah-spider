import React from 'react';
import  AddJob  from './AddJob';
import  JobsList  from './JobsList';
import  EditJob from './EditJob';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export class App extends React.Component {
    render () {
        return (  
            <div className="app">
                  <header classNmae="App-header">
                   <h1 className="App-tile">Job Scheduler</h1>
                  </header>
                
                <Router>
                    <div className="route-container">
      <div>
        <ul>
          <li>
            <Link to="/list">JobsList</Link>
          </li>
          <li>
            <Link to="/add">AddJob</Link>
          </li>
          <li>
            <Link to="/edit">EditJob</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/add">
            <AddJob />
          </Route>
          <Route path="/list">
            <JobsList />
          </Route>
          <Route path="/edit">
            <EditJob />
          </Route>
        </Switch>
      </div>
           </div>
          </Router>
            </div>
 
        );
    }
}
