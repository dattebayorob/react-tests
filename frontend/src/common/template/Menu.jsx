import React from 'react'
import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" icon="dashboard" label="Dashboard" />
        <MenuTree icon="edit" label="Cadastro">
            <MenuItem path="billingCycles" label="Billing Cycles" icon="usd"></MenuItem>
        </MenuTree>
    </ul>
)