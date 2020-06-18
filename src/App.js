import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { JobsCount } from './JobsCount';
import { AddJob } from './AddJob';
import { JobsList } from './JobsList';
import { Error404 } from './Error404';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allJobs: [
                {
                    name: "suma",
                    date: "2017-01-01",
                    freq: "month",
                    desc: "adding file"
                },
                {
                    name: "ravi",
                    date: "2017-04-05",
                    freq: "day",
                    desc: "arrange asc"
                },
                {
                    name: "Marina",
                    date: "2017-02-09",
                    freq: "week",
                    desc: "sorting"
                }
            ]
        }
        this.addJob = this.addJob.bind(this);
    }

    addJob(newJob) {
        this.setState((prevState) => {
            return {
                allJobs: [
                ...prevState.allJobs,
                newJob
                ]
            }
        });
    }

    countDays(filter) {
        const { allJobs } = this.state;
        return allJobs.filter(job => filter ? job.type === filter : job).length;
    }

    // Switch goes to first matching route
    render () {
        return (
            <div className="app">                
                <Router>
                    <div className="route-container">
                        <Nav />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <JobsCount
                                    {...props}
                                    total={this.countDays()}
                                    week={this.countDays('week')}
                                    month={this.countDays('month')}
                                    day={this.countDays('day')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <JobsList 
                                    {...props} 
                                    days={this.state.allJobs}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <JobsList
                                    {...props}
                                    days={this.state.allJobs}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddJob
                                    {...props}
                                    newJob={this.addJob}
                                />
                            )} />
                            <Route component={Error404} />
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}