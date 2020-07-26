import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'
import {store} from './config/redux'

import Dashboard from './content/Dashboard'
import Login from './content/Login'
import Register from './content/Register'

import CatList from './content/Category/Read'
import CatDetail from './content/Category/Detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/category" component={CatList} />
          <Route exact path="/category/:catId" component={CatDetail} />
        </Router>
      </Provider>
    );
  }
}

export default App
