import React,{Component} from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Manager system users: Create, Return, Update and Delete.'
}

export default class UserCrud extends Component{
    render(){
        return (
            <Main {...props}>
                Add User
            </Main>
        )
    }
}