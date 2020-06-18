import React from 'react';
import { Link } from 'react-router-dom';
//import { FaTachometerAlt } from 'react-icons/fa';
import { FaAmazon } from 'react-icons/fa';
import { FaAdobe } from 'react-icons/fa';

export const Nav = () => (
    <nav className="nav">
       <Link to="/add">
            <FaAmazon />
        </Link>
        <Link to="/list">
            <FaAdobe />
        </Link>
    </nav>
)