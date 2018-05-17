import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
    <div>
      <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label for="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Last name"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationDefaultUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend2" required
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
           <label for="exampleInputEmail1">Email address</label>
           <input
             type="email"
             className="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Enter email"
             required
           />
           <small id="emailHelp" className="form-text text-muted">
             We'll never share your email with anyone else.
           </small>
         </div>
         <div className="col-md-8 mb-3">
           <label for="exampleInputPassword1">Password</label>
           <input
             type="password"
             className="form-control"
             id="exampleInputPassword1"
             placeholder="Password"
             required
           />
         </div>
       </div>


        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationDefault04">State</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault04"
              placeholder="State"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationDefault05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="Zip"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
    );
  }
}

export default SignUp;
