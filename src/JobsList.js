import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from './Job';

export const JobsList = ({match, days}) => { 
    const filter = match.params.filter;
    const jobs = filter ? days.filter( job => job.type === filter) : days;
    return (
        <div className="jobs-list">
            <h3>{filter ? filter : 'All'} Jobs</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Freq</th>
                        <th>Desc</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, i) => 
                            <Job
                                key={i}
                                {...job}
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
                    Week
				</Link>
                &#9679;
                <Link to="/list/Month">
                    Month
				</Link>
                &#9679;
                <Link to="/list/Day">
                    Day
				</Link>
            </div>            
        </div>
    )
}