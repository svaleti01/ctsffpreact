import React from 'react';

import './DepositList.css';

const DepositList = props => {
  return (
    <section className="deposit-list">
      <h2>Loaded Transactions</h2>
     { <ul>
        {props.deposits.map(ig => (
          <li key={ig.id} >
           
            <span>{ig.accounttype} {' '} </span>
            <span>{ig.amount} {' '}</span>
        <span>{ig.date.toString()} {' '}</span>
           
          </li>
        ))}
      </ul> }
    </section>
  );
};

export default DepositList;
