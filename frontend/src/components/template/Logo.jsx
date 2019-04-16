import './Logo.css'
import logo from '../../assets/images/logo-react.png';
import React from 'react';

export default props =>
    <aside className="logo">
        {console.log(logo)}
        <a href="/" className="logo">
            <img src={logo} alt="React Logo"/>
        </a>
    </aside>