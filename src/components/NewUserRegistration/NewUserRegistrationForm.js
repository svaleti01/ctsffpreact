import React, { useState } from 'react';

import Card from '../UI/Card';
import './NewUserRegistrationForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewUserRegistrationForm = React.memo(props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredCountry, setEnteredCountry] = useState('');
  const [enteredCstate, setEnteredCstate] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredContactno, setEnteredContactno] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [detPersonStatus, setDetPersonStatus] = useState('');
  const [enteredAccounttype, setEnteredAccounttype] = useState('');
  const [enteredBranchname, setEnteredBranchname] = useState('');
  const [enteredInitialdepositamount, setEnteredInitialdepositamount] = useState('');
  const [enteredIdentificationprooftype, setEnteredIdentificationprooftype] = useState('');
  const [enteredIdentificationdocumentno, setEnteredIdentificationdocumentno] = useState('');
  const resetformfields = () => {
    setEnteredName("");
    setEnteredUserName("");
    setEnteredPassword("");
    setEnteredAddress("");
    setEnteredCountry("");
    setEnteredCstate("");
    setEnteredEmail("");
    setEnteredContactno("");
    setEnteredDate("");
    setDetPersonStatus("");
    setEnteredAccounttype("");
    setEnteredBranchname("");
    setEnteredInitialdepositamount("");
    setEnteredIdentificationprooftype("");
    setEnteredIdentificationdocumentno("");
  }
  const submitHandler = event => {
    event.preventDefault();
    const newUser = {
      name: enteredName,
      username: enteredUserName,
      password: enteredPassword,
      address: enteredAddress,
      country: enteredCountry,
      cstate: enteredCstate,
      email: enteredEmail,
      contactno: enteredContactno,
      date: enteredDate.toString(),
      personstatus: detPersonStatus,
      accounttype: enteredAccounttype,
      branchname: enteredBranchname,
      initialdepositamount: enteredInitialdepositamount,
      identificationprooftype: enteredIdentificationprooftype,
      identificationdocumentno: enteredIdentificationdocumentno
    };
    props.onAddNewUser(newUser);
    alert("Successfully Added new User");
    resetformfields();
  };

  return (
    <section className="newuserregistration-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              required="required"
              onChange={event => {
                setEnteredName(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              required="required"
              value={enteredUserName}
              onChange={event => {
                setEnteredUserName(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required="required"
              value={enteredPassword}
              onChange={event => {
                setEnteredPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              required="required"
              value={enteredAddress}
              onChange={event => {
                setEnteredAddress(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              required="required"
              value={enteredCountry}
              onChange={event => {
                setEnteredCountry(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="cstate">State</label>
            <input
              type="text"
              id="cstate"
              required="required"
              value={enteredCstate}
              onChange={event => {
                setEnteredCstate(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required="required"
              value={enteredEmail}
              onChange={event => {
                setEnteredEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="contactno">Contact No</label>
            <input
              type="text"
              id="contactno"
              required="required"
              value={enteredContactno}
              onChange={event => {
                setEnteredContactno(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Date">Date of Birth</label>
            <DatePicker
              id="date"
              required="required"
              selected={enteredDate}
              onChange={date => {
                setEnteredDate(date);
                const mtodayDate = new Date();
                const minoryear = new Date(mtodayDate.setFullYear(mtodayDate.getFullYear() - 18))
                const stodayDate = new Date();
                const senioryear = new Date(stodayDate.setFullYear(stodayDate.getFullYear() - 60))
                if (date - minoryear > 0) {
                  setDetPersonStatus("Minor");
                }
                else if ((date - minoryear) <= 0 && (date - senioryear) > 0) {
                  setDetPersonStatus("Major");
                }
                else {
                  setDetPersonStatus("Senior");
                }

              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="personstatus">Status</label>
            <input
              type="text"
              id="personstatus"
              value={detPersonStatus}
              disabled="disabled"
              onChange={event => {
                setDetPersonStatus(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="accounttype">Account Type</label>
            <input
              type="text"
              id="accounttype"
              required="required"
              value={enteredAccounttype}
              onChange={event => {
                setEnteredAccounttype(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="branchname">Branch Name</label>
            <input
              type="text"
              id="branchname"
              required="required"
              value={enteredBranchname}
              onChange={event => {
                setEnteredBranchname(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="initialdepositamount">Initial Deposit Amount</label>
            <input
              type="text"
              id="initialdepositamount"
              required="required"
              value={enteredInitialdepositamount}
              onChange={event => {
                setEnteredInitialdepositamount(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="identificationprooftype">Identification Proof Type</label>
            <input
              type="text"
              id="identificationprooftype"
              required="required"
              value={enteredIdentificationprooftype}
              onChange={event => {
                setEnteredIdentificationprooftype(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="identificationdocumentno">Identification Docuement No</label>
            <input
              type="text"
              id="identificationdocumentno"
              required="required"
              value={enteredIdentificationdocumentno}
              onChange={event => {
                setEnteredIdentificationdocumentno(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default NewUserRegistrationForm;
