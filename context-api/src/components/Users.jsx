import React, { Component } from 'react';

import { getUsers } from '../service/api'

class Users extends Component{
    state = {
        loading: false
    }
    getUsers = async () =>{
        const {showLoading, hideLoading} = this.props

        showLoading('Loading Users...')
        const response = await getUsers().then(
            response => {
                hideLoading()
                return response
            }
        )
        console.log(response)
    }
    render() { 
        return ( 
            <button onClick={this.getUsers}>Search Users</button> 
        ) 
    } 
}
export default Users;