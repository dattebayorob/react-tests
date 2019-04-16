import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';
import Home from '../home/Home';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>    