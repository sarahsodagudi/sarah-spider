import React, { Component } from 'react';
import axios from 'axios';
import JobItem from './JobItem';

class Jobs extends Component{
  constructor(){
    super();
    this.state = {
      jobs: []
    }
  }

  componentWillMount(){
    this.getJobs();
  }

  getJobs(){
    axios.get('http://localhost:3000/api/jobs')
      .then(response => {
        this.setState({jobs: response.data}, () => {
          //console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    const jobItems = this.state.jobs.map((job, i) => {
      return(
        <JobItem key={job.id} item={job} />
      )
    })
    return (
      <div>
        <h1>Jobs</h1>
        <ul className="collection">
          {jobItems}
        </ul>
      </div>
    )
  }
}

export default Jobs;