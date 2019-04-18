import React, { Component } from 'react' 

import Loading from './Loading'
import { getDepartaments } from '../service/api' 
 
class Departments extends Component { 
    state = {
        loading: false
    }
    getDepartaments = async () => { 
        this.setState({loading: true})
        const response = await getDepartaments().then(
            response => {
                this.setState({loading: false})
                return response
            }
        )
        console.log(response) 
    } 
 
    render() { 
        const {loading} = this.state
        return ( 
            <React.Fragment>
                <button onClick={this.getDepartaments}>Load Departaments</button> 
                <Loading loading={loading} message="Loading Departaments..." />
            </React.Fragment>
        ) 
    } 
} 
 
export default Departments