import React, { useState } from 'react';

import Card from '../UI/Card';
import './EducationLoanForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";

import { useLocation } from "react-router-dom";

const EducationLoanForm = (props) => {

  const location = useLocation();
  
  const [enteredLoanType, setEnteredLoanType] = useState(location.loanType);
  const [enteredLoanamount, setEnteredLoanamount] = useState('');
  const [enteredLoanapplyDate, setEnteredLoanapplyDate] = useState('');
  const [enteredRateofInterest, setEnteredRateofInterest] = useState('');
  const [selectedLoanDuration, setSelectedLoanDuration] = useState('');
  const [enteredCourseFee, setEnteredCourseFee] = useState('');
  const [enteredCourseName, setEnteredCourseName] = useState('');
  const [enteredFatherName, setEnteredFatherName] = useState('');
  const [enteredFatherOccupation, setEnteredFatherOccupation] = useState('');
  const [enteredAnnualIncome, setEnteredAnnualIncome] = useState('');

  const loandurationoptions = [{ value: "5Y", label: "5 Years" }, { value: "10Y", label: "10 Years" }, { value: "15Y", label: "15 Years" }, { value: "20Y", label: "20 Years" }];

  const resetformfields = () => {
    setEnteredLoanType("");
    setEnteredLoanamount("");
    setEnteredLoanapplyDate("");
    setEnteredRateofInterest("");
    setSelectedLoanDuration("");
    setEnteredCourseFee("");
    setEnteredCourseName("");
    setEnteredFatherName("");
    setEnteredFatherOccupation("");
    setEnteredAnnualIncome("");
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
      courseFee: enteredCourseFee,
      courseName: enteredCourseName,
      fatherName: enteredFatherName,
      fatherOccupation: enteredFatherOccupation,
      annualIncome: enteredAnnualIncome
    };
    onApplyLoan(newloanrequest);
    alert("Successfully Applied for Loan");
    resetformfields();
  };

  return (
    <section className="educationloan-form">
      <h1>Welcome {props.userName} {props.x} !</h1>
      <Card>
        <form onSubmit={submitHandler}>
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
            <label htmlFor="coursefee">Course Fee</label>
            <input
              type="number"
              id="coursefee"
              required="required"
              value={enteredCourseFee}
              onChange={event => {
                setEnteredCourseFee(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="coursename">Course</label>
            <input
              type="text"
              id="coursename"
              required="required"
              value={enteredCourseName}
              onChange={event => {
                setEnteredCourseName(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="fathername">Father Name</label>
            <input
              type="text"
              id="fathername"
              required="required"
              value={enteredFatherName}
              onChange={event => {
                setEnteredFatherName(event.target.value);
              }}
            />
          </div><div className="form-control">
            <label htmlFor="fatheroccupation">Father Occupation</label>
            <input
              type="text"
              id="fatheroccupation"
              required="required"
              value={enteredFatherOccupation}
              onChange={event => {
                setEnteredFatherOccupation(event.target.value);
              }}
            />
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
          <div className="ingredient-form__actions">
            <button type="submit">Apply Loan</button>
          </div>
        </form>
      </Card>
    </section>
  );
};
export default EducationLoanForm;