import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/TabActions'

const BASE_URL = 'http://localhost:8080/api'
const INITIAL_VALUES = {}

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
export function create(values){
    return submit(values,'post')
}

export function update(values){
    return submit(values,'put')
}
export function remove(values){
    return submit(values, 'delete')
}
function submit(values, method){
    return dispatch => {
        const id = values._id ? '/'+values._id : ''

        axios[method](`${BASE_URL}/billingCycles${id}`,values)
            .then(resp => {
                toastr.success('Success','Regiter persited successfully.')
                dispatch(init())
            })
            .catch(errors => {
                errors.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}
export function showUpdate(billingCycles){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCyclesForm', billingCycles)
    ]
}
export function showDelete(billingCycles){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCyclesForm', billingCycles)
    ]
}
export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCyclesForm', INITIAL_VALUES)
    ]
}