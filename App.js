import React from 'react';
import './App.css';
import Main from './Main';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <BrowserRouter>
      <Link to="/jobs/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
      </BrowserRouter>
    </div>
  </div>
)

export default App;
