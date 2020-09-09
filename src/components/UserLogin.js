import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import Card from '../components/UI/Card';
import '../components/UserLogin.css'
//import { Formik } from 'formik';

const UserLogin = (props) => {
  const [invalidUserMessage, setInvalidUserMessage] = useState("");
  const submitHandler = (event, invalidUserMessage) => {
    event.preventDefault();
    props.setLoggedIn(true);
    fetch('https://ctsffp-c5539.firebaseio.com/userdetails.json', {
      method: 'GET'
    }).then(response => response.json())
      .then((data) => {
        let validUser = Object.values(data).find(d => d.username == props.userName && d.password == props.password);
        if (validUser) { props.history.push("/AccountMaintanance") }
        else {
          setInvalidUserMessage("Invalid User Id / Password. Please re-try or Signup as new User!");
        };
      })
  }
  const clicknewuserregistrationHandler = (event) => {
    props.history.push("/NewUserRegistration")
  }
  const userNameHandler = (event) => {
    props.setUserName(event.target.value);
  }
  const passwordHandler = (event) => {
    props.setPassword(event.target.value);
  }
  
  return (
    <section className="userlogin-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              onChange={userNameHandler} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordHandler} />
          </div>
          <div className="userlogin-form__actions">
            <button type="submit">Log In</button>
          </div>
          <div className="userlogin-form__actions">
            <button id="new" type="button" onClick={clicknewuserregistrationHandler}>New User Registration</button>
          </div>
          <p>{invalidUserMessage}</p>
        </form>
      </Card>
    </section>
  );
};

export default withRouter(UserLogin);