import React, { Component } from 'react';

import { getUsers } from '../service/api'
import Loading from './Loading';

class Users extends Component{
    state = {
        loading: false
    }
    getUsers = async () =>{
        this.setState({loading: true})
        const response = await getUsers().then(
            response => {
                this.setState({loading: false})
                return response
            }
        )
        console.log(response)
    }
    render() { 
        const { loading } = this.state
        return ( 
            <React.Fragment>
                <button onClick={this.getUsers}>Search Users</button> 
                <Loading loading={loading} message="Loading Users..." />
            </React.Fragment>
        ) 
    } 
}
export default Users;