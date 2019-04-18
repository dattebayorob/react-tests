import React, { Component } from 'react';
import Users from './components/Users';
import Departaments from './components/Departaments';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Users />
        <Departaments />
      </React.Fragment>
    );
  }
}

export default App;
