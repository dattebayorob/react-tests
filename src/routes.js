import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'
import Test from './pages/test'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/products" exact component={Main} />
            <Route path="/products/:id" component={Product}/>
            <Route path="/test" component={Test} />
        </Switch>
    </BrowserRouter>
)