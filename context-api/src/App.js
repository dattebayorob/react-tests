import React, { Component } from 'react';
import Users from './components/Users';
import Departaments from './components/Departaments';
import Loading from './components/Loading';

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => { },
  hideLoading: () => { }
})

class App extends Component {
  state = (
    {
      loading: false,
      message: null
    }
  )
  showLoading = message => this.setState({
    loading: true,
    message
  })
  hideLoading = () => this.setState({
    loading: false
  })

  render() {
    const { showLoading, hideLoading } = this
    const value = {
      ...this.state,
      showLoading,
      hideLoading
    }
    return (
      <LoadingContext.Provider value = {value}>
        <LoadingContext.Consumer>
          {
            ({showLoading, hideLoading, loading, message}) => (
              <React.Fragment>
                <Users {...{showLoading,hideLoading}} />
                <Departaments {...{showLoading,hideLoading}} />
                <Loading {...{loading,message}} />
              </React.Fragment>
            )
          }
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    );
  }
}

export default App;
