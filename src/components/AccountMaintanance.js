import React, { useState } from 'react';

import Card from '../components/UI/Card';
import '../components/AccountMaintanance.css';
import Select from "react-dropdown-select";
import { withRouter } from "react-router-dom";

const AccountMaintanance = React.memo(props => {

  const [selectedloan, setSelectedloan] = useState('');
  const loanoptions = [{ value: "educationalloan", label: "Educational Loan" }, { value: "personalloan", label: "Personal Loan" }, { value: "homeloan", label: "Home Loan" }];
  const submitHandler = event => {
    event.preventDefault();
    props.history.push("/Deposits")
  };

  const clickapplyloanHandler = (event) => {
    if (selectedloan[0].value == 'educationalloan')
      props.history.push(
        {
          pathname: '/EducationLoanForm',
          loanType: selectedloan[0].label
        });
    else

      props.history.push(
        {
          pathname: '/HomeandPersonalLoanForm',
          loanType: selectedloan[0].label
        });


    //props.history.push(`/EducationLoanForm`, {data: selectedloan[0].value});
  }
  return (
    <section className="accountaintanance-form">
      <Card>
        <form onSubmit={submitHandler}>
          <h1>Welcome {props.userName} {props.x} !</h1>
          <p>For deposits, please press the Deposit button below</p>
          <div className="accountaintanance-form__actions">
            <button type="Deposit">Deposit</button>
          </div>
          <p>To Apply for loan select appropriate loan and press Apply Loan button</p>
          <Select options={loanoptions} onChange={(selectedloan) => setSelectedloan(selectedloan)} />
          <div className="accountaintanance-form__actions">
            <button id="loan" type="button" onClick={clickapplyloanHandler}>Apply Loan</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default withRouter(AccountMaintanance);
