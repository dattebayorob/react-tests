import React,{Component} from 'react';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Manager system users: Create, Return, Update and Delete.'
}

const API_URL="http://localhost:8080/users";
const INITIAL_STATE ={
    user: { name:'', email: ''},
    list: []
}

export default class UserCrud extends Component{
    state = { ...INITIAL_STATE }

    clear(){
        this.setState({user: INITIAL_STATE.user})
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put': 'post';
        const url = user.id ? `${API_URL}/${user.id}` : API_URL;
        axios[method](url,user)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({user: INITIAL_STATE.user, list})
            })
    }

    componentWillMount(){
        axios(API_URL).then(
            resp => {
                this.setState({list: resp.data})
            }
        )
    }

    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) list.unshift(user);
        return list;
    }

    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Name: </label>
                            <input type="text" name="name" className="form-control" 
                                value={this.state.user.name}
                                onChange={field => this.updateField(field)}
                                placeholder="Type the name"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Email: </label>
                            <input type="text" name="email" className="form-control" 
                                value={this.state.user.email}
                                onChange={field => this.updateField(field)}
                                placeholder="Type the email"
                            />
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" 
                            onClick={field => this.save(field)}>
                            Save
                        </button>

                        <button className="btn btn-secondary" 
                            onClick={field => this.clear(field)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    setUser(user) {
        this.setState({ user })
    }
    remove(user) {
        axios.delete(`${API_URL}/${user.id}`).then(
            resp => {
                const list = this.getUpdatedList(user, false);
                this.setState({ list })
            }
        )
    }
    
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }   

    renderRows(){
        return this.state.list.map(
            user => {
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning"
                                onClick={() => this.setUser(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2"
                                onClick={() => this.remove(user)}>
                                <i className="fa fa-trash"></i>

                            </button>
                        </td>
                    </tr>
                )
            }
        )
    }

    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}