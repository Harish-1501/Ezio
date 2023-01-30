import React, { Component, useState } from 'react';
import  Dashboard  from './dashboard.js';
import { BrowserRouter as Router, Routes, Route,redirect, Link,useHistory, useNavigate} from 'react-router-dom';
class Login extends Component{
  render() {
  function Check(){
    let navigate = useNavigate();
    let history=useHistory();
    var storedemail = localStorage.getItem('email');
    var storedpassword = localStorage.getItem('password');

    var useremail = document.getElementById('useremail');
    var userpassword = document.getElementById('userpassword');

    if(useremail.value == storedemail && userpassword.value == storedpassword){
      // navigate.push("/dashboard");
      history.pushState("/dashboard");
    }else{
        alert('Invalid Credentials');
    }
  }
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-4">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="useremail"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="userpassword"
            placeholder="Enter password" 
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>  
          </div>
          <div></div>
        </div>
        <div className="d-grid">
          <button id="check_button" type="button" className="btn btn-primary" onClick={Check}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/signup">Forgot password?</a>
        </p>
        
      </form>
    )
  }
}

export default Login;