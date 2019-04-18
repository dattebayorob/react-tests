import React, { Component } from 'react' 

import { getDepartaments } from '../service/api' 
 
class Departments extends Component { 
    state = {
        loading: false
    }
    getDepartaments = async () => { 
        const {showLoading, hideLoading} = this.props
        showLoading('Loading Departaments')
        const response = await getDepartaments().then(
            response => {
                hideLoading()
                return response
            }
        )
        console.log(response) 
    } 
 
    render() { 
        return ( 
            <button onClick={this.getDepartaments}>Load Departaments</button> 
        ) 
    } 
} 
 
export default Departments