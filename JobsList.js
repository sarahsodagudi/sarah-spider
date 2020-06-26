import React from 'react';
import axios from 'axios';
import { Job } from './Job';
export default class JobsList extends React.Component {
  state = {
    jobs: [{
                    name: "suma",
                    sdate: "2017-01-01",
                    edate: "2019-10-12",
                    freq: "month",
                    desc: "adding file",
                    trigger: " ",
                    reportd: " ",
                    expectedd: " ",
                    fallbackd: " "
                    
                },
                {
                    name: "ravi",
                    sdate: "2017-04-05",
                    edate: "2019-10-12",
                    freq: "day",
                    desc: "arrange asc",
                    trigger: " ",
                    reportd: " ",
                    expectedd: " ",
                    fallbackd: " "
                },
                {
                    name: "Marina",
                    sdate: "2017-02-09",
                    edate: "2019-10-12",
                    freq: "week",
                    desc: "sorting",
                    trigger: " ",
                    reportd: " ",
                    expectedd: " ",
                    fallbackd: " "
                }]
  }
componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const jobs = res.data;
        this.setState({ jobs });
      })
  }

render() {
    return (
        <div className="jobs-list">
            <h3>All Jobs</h3> 
     <table class="table">
                <thead>
                    <tr>
                        <th>starting Date</th>
                        <th>Name</th>
                        <th>Freq</th>
                        <th>Desc</th>
                        <th>EndingD</th>
                        <th>Trigger</th>
                        <th>ReportD</th>
                        <th>ExpectedD</th>
                        <th>FallbackD</th>
                    </tr>
                </thead>
                  <tbody>
                    {
                        this.state.jobs.map(job => 
                            <Job
                                {...job}
                            />
                        )
                    }
                </tbody>  
       </table>       
        </div>
    )
}
}