import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./About/About'),
  loading: Loading,
});

const TodoList = Loadable({
  loader: () => import('./Todo/TodoList'),
  loading: Loading,
});

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
