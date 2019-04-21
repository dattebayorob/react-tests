import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import DashboardReducer from '../dashboard/DashboardReducer'
import TabReducer from '../common/tab/TabReducer'
import BillingCyclesReducer from '../billingCycles/BillingCyclesReducer'

const rootReducer = combineReducers(
    {
        dashboard: DashboardReducer,
        tab: TabReducer,
        billingCycles: BillingCyclesReducer,
        form: formReducer,
        toastr: toastrReducer
    }
)

export default rootReducer