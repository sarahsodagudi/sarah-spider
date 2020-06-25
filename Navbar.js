import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <ul className="right hide-on-small-only">
              <li><BrowserRouter><Link to="/"><i className="fa fa-users"></i> Jobs</Link></BrowserRouter></li>         
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><BrowserRouter><Link to="/"><i className="fa fa-users"></i> Jobs</Link></BrowserRouter></li>  
            <li><BrowserRouter><Link to="/jobs/add"><i className="fa fa-plus"></i> Add Job</Link></BrowserRouter></li>  
            <li><BrowserRouter><Link to="/about"><i className="fa fa-question-circle"></i> About</Link></BrowserRouter></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;