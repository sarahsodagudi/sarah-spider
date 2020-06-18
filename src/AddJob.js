import React from 'react';

export const AddJob = ({newJob}) => {
    let date, name, freq, desc;
    const submit = (e) => {
        e.preventDefault();
        newJob({
            date : date.value,
            name : name.value,
            freq : freq.value,
            desc : desc.value,
        });
        date.value = name.value = freq.value = desc.value = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={submit} className="form black-container">
                <label>
                    <h3>Add a JOB</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    Date: <br/>
                    <input 
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                <label>
                    Place: <br />
                    <input
                        id="name"
                        type="text"
                        required
                        ref={(input) => name = input} 
                    />
                </label>
                <label>
                    Freq: <br />
                    <select ref={(input) => freq = input} >
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="day">day</option>
                    </select>
                </label>
                <label>
                    Desc: <br />
                    <input
                        id="desc"
                        type="text"
                        required
                        ref={(input) => desc = input} 
                    />
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}