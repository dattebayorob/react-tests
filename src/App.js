import React from 'react';

import Route from './routes'
import Header from './components/header'
import Main from './pages/main'

const App = () => (
  <div className="App">
    <Header />
    <Route />
  </div>
)

export default App;
