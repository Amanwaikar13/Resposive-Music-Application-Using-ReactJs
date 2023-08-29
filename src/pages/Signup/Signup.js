import React, { useState } from "react";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Database from './data'
import "./Signup.css";

function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const Login = ()=>{
    return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
    );
  }
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = Database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
          {renderErrorMessage("fname")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
          {renderErrorMessage("lname")}
        </div>
        <div className="input-container">
          <label>Mobile Number </label>
          <input type="number" name="Number" required />
          {renderErrorMessage("Mobile Number")}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in <div className="button-container"><button onClick={Login} type="submit">Login</button></div></div> : renderForm}
        <div className="button-container">
        </div>
      </div>
    </div>
  );
}

export default Signup;