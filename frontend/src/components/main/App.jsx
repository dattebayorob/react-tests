import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';
import Home from '../home/Home';

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>