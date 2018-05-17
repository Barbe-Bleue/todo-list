import React, { Component } from 'react';
import './Login.css'
class Login extends Component {

  render() {
    return(
      <div class="formLogin" className="component">
        <form>
          <div className="form-group col-auto" align="left">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group col-auto" align="left">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default Login;
