import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from './Routes'
import { HashRouter } from 'react-router-dom'

export default props => (
    <HashRouter>
    <div className="wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="content-wrapper">
        <Routes />
        </div>
        <Footer></Footer>
        </div>

    </HashRouter>
)

