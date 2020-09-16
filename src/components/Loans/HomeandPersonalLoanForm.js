import React, { useState } from 'react';

import Card from '../UI/Card';
import './HomeandPersonalLoanForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HomeandPersonalLoanForm = (props) => {

  const location = useLocation();

  const [enteredLoanType, setEnteredLoanType] = useState(location.loanType);
  const [enteredLoanamount, setEnteredLoanamount] = useState('');
  const [enteredLoanapplyDate, setEnteredLoanapplyDate] = useState('');
  const [enteredRateofInterest, setEnteredRateofInterest] = useState('');
  const [selectedLoanDuration, setSelectedLoanDuration] = useState('');
  const [enteredAnnualIncome, setEnteredAnnualIncome] = useState('');
  const [enteredCompanyName, setEnteredCompanyName] = useState('');
  const [enteredDesignation, setEnteredDesignation] = useState('');
  const [enteredTotalexp, setEnteredTotalexp] = useState('');
  const [enteredExpCurCompany, setEnteredExpCurCompany] = useState('');

  const loandurationoptions = [{ value: "5Y", label: "5 Years" }, { value: "10Y", label: "10 Years" }, { value: "15Y", label: "15 Years" }, { value: "20Y", label: "20 Years" }];

  const resetformfields = () => {
    setEnteredLoanType("");
    setEnteredLoanamount("");
    setEnteredLoanapplyDate("");
    setEnteredRateofInterest("");
    setSelectedLoanDuration("");
    setEnteredAnnualIncome("");
    setEnteredCompanyName("");
    setEnteredDesignation("");
    setEnteredTotalexp("");
    setEnteredExpCurCompany("");
  }

  const onApplyLoan = newloanrequest => {
    console.log(newloanrequest);
    fetch('https://ctsffp-c5539.firebaseio.com/userloans.json', {
      method: 'POST',
      body: JSON.stringify(newloanrequest),
      headers: { 'Contrnt-Type': 'application/json' }
    }).then(response => {
      return response.json();
    });
  };
  const submitHandler = event => {
    event.preventDefault();
    const newloanrequest = {
      username: props.username,
      loanType: enteredLoanType,
      loanamount: enteredLoanamount,
      loanapplyDate: enteredLoanapplyDate,
      rateofInterest: enteredRateofInterest,
      loanduration: selectedLoanDuration[0].label,      
      annualIncome: enteredAnnualIncome,
      companyname: enteredCompanyName,
      designation: enteredDesignation,
      totexp: enteredTotalexp,
      expcurcom: enteredExpCurCompany,
    };
    onApplyLoan(newloanrequest);
    alert("Successfully Applied for Loan");
    resetformfields();
  };
  const clickbackHandler = (event) => {
    props.history.push(
  {
    pathname: '/AccountMaintanance'
  });
}
  return (
    <section className="homeandpersonalloan-form">
      <h1>Welcome {props.userName} {props.x} !</h1>
      <Card>
        <form onSubmit={submitHandler}>
        <div className="deposit-form__actions">
            <button id="back" type="button" onClick={clickbackHandler}>Back</button>
          </div>
          <p>Application for {location.loanType}  !</p>
          <div className="form-control">
            <label htmlFor="loantype">Loan Type</label>
            <input
              type="text"
              id="loantype"
              value={enteredLoanType}
              required="required"
              disabled="disabled"
              onChange={event => {
                setEnteredLoanType(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="loanamount">Loan Amount</label>
            <input
              type="number"
              id="loanamount"
              required="required"
              value={enteredLoanamount}
              onChange={event => {
                setEnteredLoanamount(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Date">Loan Apply Date</label>
            <DatePicker
              id="loanapplydate"
              required="required"
              selected={enteredLoanapplyDate}
              onChange={date => {
                setEnteredLoanapplyDate(date);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="rateofinterest">Rate of Interest</label>
            <input
              type="text"
              id="rateofinterest"
              required="required"
              value={enteredRateofInterest}
              onChange={event => {
                setEnteredRateofInterest(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="select">Duration of Loan</label>
            <Select options={loandurationoptions} onChange={(selectedLoanDuration) => setSelectedLoanDuration(selectedLoanDuration)} />
          </div>
          <div className="form-control">
            <label htmlFor="annualincome">Annual Income</label>
            <input
              type="number"
              id="annualincome"
              required="required"
              value={enteredAnnualIncome}
              onChange={event => {
                setEnteredAnnualIncome(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="companyname">Company Name</label>
            <input
              type="text"
              id="companyname"
              required="required"
              value={enteredCompanyName}
              onChange={event => {
                setEnteredCompanyName(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              required="required"
              value={enteredDesignation}
              onChange={event => {
                setEnteredDesignation(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="totexp">Total Expereince (in years)</label>
            <input
              type="text"
              id="totexp"
              required="required"
              value={enteredTotalexp}
              onChange={event => {
                setEnteredTotalexp(event.target.value);
              }}
            />
          </div><div className="form-control">
            <label htmlFor="expcurcom">Expereince in current Company (in years)</label>
            <input
              type="text"
              id="expcurcom"
              required="required"
              value={enteredExpCurCompany}
              onChange={event => {
                setEnteredExpCurCompany(event.target.value);
              }}
            />
          </div>
          <div className="homeandpersonalloan-form__actions">
            <button type="submit">Apply Loan</button>
          </div>
        </form>
      </Card>
    </section>
  );  
};
export default withRouter(HomeandPersonalLoanForm);