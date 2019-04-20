import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import DashBoard from '../dashboard/Dashboard'
import BillingCycles from '../billingCycles/BillingCycles'

export default props => (
        <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/billingCycles' component={BillingCycles} />
            <Redirect from="*" to="/" />
        </Switch>
)