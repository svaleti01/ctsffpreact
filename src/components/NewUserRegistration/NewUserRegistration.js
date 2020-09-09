import React, { useState } from 'react';

import NewUserRegistrationForm from './NewUserRegistrationForm';
const NewUserRegistration = () => {
  const [newUserRegistrationFields, setNewUserRegistrationFields] = useState([]);

  const addNewUserHandler = newuser => {
    setNewUserRegistrationFields(prevIngredients => [{ id: Math.random().toString(), ...newuser}]);
    fetch('https://ctsffp-c5539.firebaseio.com/userdetails.json', {
      method: 'POST',
      body: JSON.stringify(newuser),
      headers: {'Contrnt-Type': 'application/json'}
    }).then(response => {
      return response.json();
    });
  };
 return (
    <div className="App">
      <NewUserRegistrationForm onAddNewUser={addNewUserHandler} />      
    </div>
  );
};

export default NewUserRegistration;