import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import {Link} from 'react-router-dom';
class JobItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      
      <li className="collection-item">
          <BrowserRouter>
          <Link to={`/jobs/${this.state.item.id}`}>{this.state.item.name}</Link>
          </BrowserRouter>   
      </li>
      
    )
  }
}

export default JobItem;