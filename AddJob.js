import React from 'react';
import axios from 'axios';
export default class AddJob extends React.Component{ 
           state = {
            sdate : '',
            name : '',
            freq : '',
            desc : '',
            edate : '',
            trigger : '',
            reportd : '',
            expectedd : '',
            fallbackd : '',
        };
handleChange = event => {
   this.setState({ name: event.target.value });
};
 handleSubmit = event =>{
event.preventDefault();
const user={
name:this.state.name
};
axios
.post('https://jsonplaceholder.typicode.com/users',{user})
.then(res=>{
 console.log(res);
 console.log(res.data);
});

};
   render(){
    return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form black-container">
                <label>
                    <h3>Add a JOB</h3>
                    <br />
                    <br />
                    <br />
                </label>
                
                <label>
                    Ending Date: <br/>
                    <input 
                        id="edate"
                        type="date"
                        onChange={this.handleChange} 
                    />
                </label>
                   <label>
                    Starting Date: <br/>
                    <input type
                        id="sdate"
                        type="date"
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Name: <br />
                    <input
                        id="name"
                        type="text"
                        onChange={this.handleChange} 
                    />
                </label>
               <label>
                    Trigger type: <br />
                    <input
                        id="trigger"
                        type="text"
                        onChange={this.handleChange} 
                    />
                </label>
               <label>
                    reportDate: <br/>
                    <input 
                        id="reportd"
                        type="date"
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    ExpectedDate: <br/>
                    <input 
                        id="expectedd"
                        type="date"
                        onChange={this.handleChange} 
                    />
                </label>
                <label>
                    fallbackDate: <br/>
                    <input 
                        id="fallbackd"
                        type="date"
                       onChange={this.handleChange} 
                    />
                </label>
                <label>
                    Freq: <br />
                    <select onChange={this.handleChange} >
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="day">day</option>
                    </select>
                </label>
                <label>
                    Description: <br />
                    <input
                        id="desc"
                        type="text"
                        onChange={this.handleChange} 
                    />
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}
}