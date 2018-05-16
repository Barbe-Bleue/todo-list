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

const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});

const SignUp = Loadable({
  loader: () => import('./SignUp/SignUp'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/todo" component={TodoList}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
