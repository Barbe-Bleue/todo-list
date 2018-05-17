import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      city: '',
      state: '',
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // for multiple input
  handleChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.id;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    for(var item in this.state){
      console.log(this.state[item]);
    }
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First name"
              required
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last name"
              required
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                aria-describedby="inputGroupPrepend2"
                required
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
           <label htmlFor="email">Email address</label>
           <input
             type="email"
             className="form-control"
             id="email"
             aria-describedby="emailHelp"
             placeholder="Enter email"
             required
             value={this.state.value}
             onChange={this.handleChange}
           />
           <small id="emailHelp" className="form-text text-muted">
             We'll never share your email with anyone else.
           </small>
         </div>
         <div className="col-md-8 mb-3">
           <label htmlFor="password">Password</label>
           <input
             type="password"
             className="form-control"
             id="password"
             placeholder="Password"
             required
             value={this.state.value}
             onChange={this.handleChange}
           />
         </div>
       </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              required
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State"
              required
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip"
              required
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="conditions"
              required
            />
            <label className="form-check-label" htmlFor="conditions">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </div>
    );
  }
}

export default SignUp;
