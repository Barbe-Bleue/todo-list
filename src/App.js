import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './Todo/TodoList';
import About from './About/About';
import Home from './Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/todo" component={TodoList}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
