import React, { Component } from 'react';
import logo from '../logo.svg';
import Hi from './Hi';
import Login from '../Login/Login'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      fact: '',
      gitHub: ''
    };
    this.chuck = this.chuck.bind(this);
    this.getGithub = this.getGithub.bind(this);
  }

  chuck(event) {
    axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb:01')
    .then(response => this.setState({fact: response.data[0].fact}));
  }

  getGithub(event) {
    axios.get('https://api.github.com/users/Barbe-Bleue')
    .then(response => {this.setState({gitHub: response.data})})
  }
  git() {
    for(var info in this.state.gitHub) {
      return (
        <li className="list-group-item d-flex justify-content-between
          align-items-center item" key={info}>
          {this.state.gitHub[info]}
        </li>
      );
    }

  }
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes projets React</h1>
        </header>
        <Hi /> {/* component pour le form */}
        <Login />  {/* component pour le login */}
        <div>
          <ul className="list-group">
            <li className="list-group-item"><a href="/todo">Todo list</a></li>
            <li className="list-group-item"><a href="/about">About</a></li>
            <li className="list-group-item"><a href="/signup">SignUp</a></li>
            <li className="list-group-item"><a href="/login">Login</a></li>
            <li className="list-group-item"><a href="/ptdr">Not found</a></li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={this.chuck}>
          Chuck Norris
        </button>
        <p>{this.state.fact}</p>
        <button className="btn btn-primary" onClick={this.getGithub}>
          show Github
        </button>
        <ul>{this.git()}</ul>
      </div>
    );
  }
}

export default Home;
