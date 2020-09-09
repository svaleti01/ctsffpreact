import React, { useState, useEffect } from 'react';

import DepositForm from './DepositForm';
import DepositList from './DepositList';

const Deposits = (props) => {
  const [userDeposits, setUserDeposits] = useState([]);
  const [userTotalDeposits, setUsertotalDeposits] = useState(0);

  useEffect(() => {
    fetchtotalamount();
  }, [userTotalDeposits]);


  const addDepositHandler = deposit => {
    console.log(deposit);
    setUserDeposits(prevDeposits => [{ id: Math.random().toString(), ...deposit }]);
    fetch('https://ctsffp-c5539.firebaseio.com/userdeposits.json', {
      method: 'POST',
      body: JSON.stringify(deposit),
      headers: { 'Contrnt-Type': 'application/json' }
    }).then(response => {
      fetchtotalamount();
      return response.json();
    });
  };

  const fetchtotalamount = () => {
    fetch('https://ctsffp-c5539.firebaseio.com/userdeposits.json', {
      method: 'GET'
    }).then(response => response.json())
      .then((data) => {
        if (data !== null && data !== undefined) {
          const totalAmount = Object.values(data).reduce((totalAmount, current) => {
            return current.username === props.userName ? (totalAmount + Number(current.amount)) : totalAmount;

          }, 0);

          setUsertotalDeposits(totalAmount);
          let newdata = [];
          Object.entries(data).forEach(element => {
            if (element[1].username == props.userName) { newdata.push(Object.assign({ id: element[0] }, element[1])) }
          });
          setUserDeposits(newdata);
        }
        else {
          setUsertotalDeposits(0);
        }
      })
  }

  return (
    <div className="App">
      <h1>Welcome {props.userName} {props.x} !</h1>
      <p>Total Deposit Amount :  {userTotalDeposits}  !</p>
      <DepositForm username={props.userName} onAddDeposit={addDepositHandler} />

      <section>
        <DepositList deposits={userDeposits} />
      </section>
    </div>
  );
};

export default Deposits;
