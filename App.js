import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { Nav } from './Nav';
import { TripsCount } from './TripsCount';
import { AddTrip } from './AddTrip';
import { TripsList } from './TripsList';
import { Error404 } from './Error404';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: [
                {
                    name: "suma",
                    date: "2017-01-01",
                    type: "month"
                },
                {
                    name: "ravi",
                    date: "2017-04-05",
                    type: "day"
                },
                {
                    name: "Marina",
                    date: "2017-02-09",
                    type: "week"
                }
            ]
        }
        this.addTrip = this.addTrip.bind(this);
    }

    addTrip(newTrip) {
        this.setState((prevState) => {
            return {
                allTrips: [
                ...prevState.allTrips,
                newTrip
                ]
            }
        });
    }

    countDays(filter) {
        const { allTrips } = this.state;
        return allTrips.filter(trip => filter ? trip.type === filter : trip).length;
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
                                <TripsCount
                                    {...props}
                                    total={this.countDays()}
                                    week={this.countDays('week')}
                                    month={this.countDays('month')}
                                    day={this.countDays('day')}
                                />
                            )}>
                            </Route>
                            <Route path="/list/:filter" render={(props) => (
                                <TripsList 
                                    {...props} 
                                    days={this.state.allTrips}
                                /> 
                            )}/>
                            <Route path="/list" render={(props) => (
                                <TripsList
                                    {...props}
                                    days={this.state.allTrips}
                                />
                            )} />
                            <Route path="/add" render={(props) => (
                                <AddTrip
                                    {...props}
                                    newTrip={this.addTrip}
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