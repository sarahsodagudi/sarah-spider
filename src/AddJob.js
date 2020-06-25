import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
class AddJob extends Component{
  addJob(newJob){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/jobs',
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
    this.addJob(newJob);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <BrowserRouter><Link className="btn grey" to="/">Back</Link></BrowserRouter>
       <h1>Add Job</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="date" name="sdate" ref="sdate" />
            <label htmlFor="sdate">Starting Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="edate" ref="edate" />
            <label htmlFor="edate">Ending Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="reportd" ref="reportd" />
            <label htmlFor="reportd">Report Date</label>
          </div>
          <div className="input-field">
            <input type="date" name="fallbackd" ref="fallbackd" />
            <label htmlFor="fallbackd">Fallback Date</label>
          </div>
          <div className="input-field">
            <input type="text" name="trigger" ref="trigger" />
            <label htmlFor="trigger">Trigger</label>
          </div>
          <div className="input-field">
            <input type="text" name="desc" ref="desc" />
            <label htmlFor="desc">Description</label>
          </div>
          <div className="input-field">
            <input type="date" name="expectedd" ref="expectedd" />
            <label htmlFor="expectedd">Expected Date</label>
          </div>
          <div className="input-field">
            <input type="text" name="freq" ref="freq" />
            <label htmlFor="freq">Frequency(day,week,month)</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddJob;