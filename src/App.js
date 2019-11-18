import React, { Component } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profiler from './components/Profiler';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup}>
        </Route>
        <Route path="/signin" component={Signin}>
        </Route>
        <Route path= "/profiler" component ={Profiler}></Route>
      </Router>
    );
  }
}
