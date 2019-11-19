import React, { Component } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profiler from './components/Profiler';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path= "/profile" component ={Profiler} />         
        <Route path= "/update" component ={UpdateUser} />
      </Router>
    );
  }
}
