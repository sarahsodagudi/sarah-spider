import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
class JobDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getJob();
  }

  getJob(){
    let jobId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/jobs/${jobId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state);
      })
  })
  .catch(err => console.log(err));
  }

  onDelete(){
    let jobId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/jobs/${jobId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render(){
    return (
     <div>
       <br />
       <BrowserRouter>
       <Link className="btn grey" to="/">Back</Link>
       </BrowserRouter>
       <h1>{this.state.details.name}</h1>
       <ul className="collection">
        <li className="collection-item">Frequency: {this.state.details.freq}</li>
        <li className="collection-item">Starting Date: {this.state.details.sdate}</li>
        <li className="collection-item">Ending Date: {this.state.details.edate}</li>
        <li className="collection-item">Description: {this.state.details.desc}</li>
        <li className="collection-item">Report Date: {this.state.details.reportd}</li>
        <li className="collection-item">Expected Date: {this.state.details.expectedd}</li>
        <li className="collection-item">Fallback Date: {this.state.details.fallback}</li>
        <li className="collection-item">Trigger: {this.state.details.trigger}</li>
        </ul>
        <BrowserRouter>
        <Link className="btn" to={`/jobs/edit/${this.state.details.id}`}> Edit</Link>
         </BrowserRouter>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}

export default JobDetails;