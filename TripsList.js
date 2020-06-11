import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from './Trip';

export const TripsList = ({match, days}) => { 
    const filter = match.params.filter;
    const trips = filter ? days.filter( trip => trip.type === filter) : days;
    return (
        <div className="trips-list">
            <h3>{filter ? filter : 'All'} Jobs</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trip
                                key={i}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Week">
                    Weeks
				</Link>
                &#9679;
                <Link to="/list/Month">
                    Months
				</Link>
                &#9679;
                <Link to="/list/Day">
                    Days
				</Link>
            </div>            
        </div>
    )
}