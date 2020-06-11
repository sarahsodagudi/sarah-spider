import React from 'react';

export const AddTrip = ({newTrip}) => {
    let date, name, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            name : name.value,
            type : type.value,
        });
        date.value = name.value = type.value = '';
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
                    Type: <br />
                    <select ref={(input) => type = input} >
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="day">day</option>
                    </select>
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
}