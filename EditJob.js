import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
class EditJob extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      freq:'',
      desc:'',
      reportd:'',
      sdate:'',
      edate:'',
      expectedd:'',
      fallbackd:'',
      trigger:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getJobDetails();
  }

  getJobDetails(){
    let jobId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/jobs/${jobId}`)
    .then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        desc: response.data.desc,
        freq: response.data.freq,
        sdate: response.data.sdate,
        edate: response.data.edate,
        reportd: response.data.reportd,
        expectedd: response.data.expectedd,
        fallbackd: response.data.fallbackd,
        trigger: response.data.trigger
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editJob(newJob){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/jobs/${this.state.id}`,
      data: newJob
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newJob = {
      name: this.refs.name.value,
      freq: this.refs.freq.value,
      sdate: this.refs.sdate.value,
      desc: this.refs.desc.value,
      edate: this.refs.edate.value,
      trigger: this.refs.trigger.value,
      reportd: this.refs.reportd.value,
      expectedd: this.refs.expectedd.value,
      fallbackd: this.refs.fallbackd.value
    }
    this.editJob(newJob);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
     <div>
        <br />
       <BrowserRouter>
       <Link className="btn grey" to="/">Back</Link>
       </BrowserRouter>
       <h1>Edit Job</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="date" name="sdate" ref="sdate" value={this.state.sdate} onChange={this.handleInputChange} />
            <label htmlFor="sdate">Starting Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="edate" ref="edate" value={this.state.edate} onChange={this.handleInputChange} />
            <label htmlFor="edate">Ending Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="reportd" ref="reportd" value={this.state.reportd} onChange={this.handleInputChange} />
            <label htmlFor="reportd">Report Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="fallbackd" ref="fallbackd" value={this.state.fallbackd} onChange={this.handleInputChange} />
            <label htmlFor="fallbackd">Fallback Date</label>
          </div>
          <div className="input-field">
            <input type="text" name="trigger" ref="trigger" value={this.state.trigger} onChange={this.handleInputChange} />
            <label htmlFor="trigger">Trigger</label>
          </div>
          <div className="input-field">
            <input type="text" name="desc" ref="desc" value={this.state.desc} onChange={this.handleInputChange} />
            <label htmlFor="desc">Description</label>
          </div>
          <div className="input-field">
            <input type="date" name="expectedd" ref="expectedd" value={this.state.expectedd} onChange={this.handleInputChange} />
            <label htmlFor="expectedd">Expected Date</label>
          </div>
          <div className="input-field">
           <input type="text" name="freq" ref="expectedd" value={this.state.freq} onChange={this.handleInputChange} />
            <label htmlFor="freq">Frequency</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditJob;