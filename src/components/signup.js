import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    function store(){
      var F_name = document.getElementById('F_name');
      var L_name = document.getElementById('L_name');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;
  
      if(F_name.value.length == 0){
          alert('Please fill in your First Name');
      }
      else if(L_name.value.length == 0){
          alert('Please fill in your Last Name');
      }
      else if(email.value.length == 0){
        alert("Please fill in the email");
      }
      else if(password.value.length == 0){
          alert('Please fill in password');
  
      }else if(password.value.length < 8){
          alert('Password must be above 8 characters');
  
      }else if(!password.value.match(numbers)){
          alert('please add 1 number');
  
      }else if(!password.value.match(upperCaseLetters)){
          alert('please add 1 uppercase letter');
  
      }else if(!password.value.match(lowerCaseLetters)){
          alert('please add 1 lovercase letter');
  
      }else{
          localStorage.setItem('email', email.value);
          localStorage.setItem('password', password.value);
          alert('Your account has been created');
      }
  }
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label for="F_name">First name</label>
          <input
            type="text"
            className="form-control"
            id="F_name"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label for="L_name">Last name</label>
          <input 
            type="text" 
            className="form-control" 
            id="L_name"
            placeholder="Last name" 
          />
        </div>
        <div className="mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={store}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}