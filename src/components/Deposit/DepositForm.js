import React, { useState } from 'react';

import Card from '../UI/Card';
import './DepositForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from "react-router-dom";

const DepositForm = React.memo(props => {
  const [enteredAccountType, setEnteredAccountType] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(new Date());

  const resetformfields = () => {
    setEnteredAccountType("");
    setEnteredAmount("");
  }
  const submitHandler = event => {
    event.preventDefault();
    props.onAddDeposit({ username: props.username, accounttype: enteredAccountType, amount: enteredAmount, date: enteredDate });
    alert("Deposit Successfull");
    resetformfields();
  };

  const clickbackHandler = (event) => {
    props.history.push(
      {
        pathname: '/AccountMaintanance'
      });
  }


  //props.history.push(`/EducationLoanForm`, {data: selectedloan[0].value});

  return (
    <section className="deposit-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Account Type</label>
            <input
              type="text"
              id="accounttype"
              value={enteredAccountType}
              onChange={event => {
                setEnteredAccountType(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={event => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Date">Date</label>
            <DatePicker
              id="date"
              selected={enteredDate}
              onChange={date => {
                setEnteredDate(date);
              }}
            />
          </div>
          <div className="deposit-form__actions">
            <button type="submit">Add Deposit</button>
          </div>
          <div className="deposit-form__actions">
            <button id="back" type="button" onClick={clickbackHandler}>Back</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default withRouter(DepositForm);
