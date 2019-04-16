import './Logo.css'
import logo from '../../assets/images/logo-react.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        {console.log(logo)}
        <Link to="/" className="logo">
            <img src={logo} alt="React Logo"/>
        </Link>
    </aside>