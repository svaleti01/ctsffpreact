import React , { useState }from 'react';
import UserLogin from './components/UserLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewUserRegistration from './components/NewUserRegistration/NewUserRegistration'
import AccountMaintanance from './components/AccountMaintanance'
import Deposits from './components/Deposit/Deposits'
import EducationLoanForm from './components/Loans/EducationLoanForm'
import HomeandPersonalLoanForm from './components/Loans/HomeandPersonalLoanForm'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
const [userName, setUserName] = useState();
const [password, setPassword] = useState();
    
    return (    
   
      <BrowserRouter>
        <Switch>
        <Route path="/" exact> 
        <UserLogin setLoggedIn={setLoggedIn} setUserName={setUserName} setPassword={setPassword} 
        userName={userName} password={password} />
         </Route>         
          <Route path="/NewUserRegistration">
           <NewUserRegistration userName={userName} loggedIn={loggedIn}/>
          </Route>
          <Route path="/AccountMaintanance">
           <AccountMaintanance userName={userName} loggedIn={loggedIn}/>
          </Route>
          <Route path="/Deposits">
           <Deposits userName={userName} loggedIn={loggedIn}/>
          </Route>
          <Route path="/EducationLoanForm">
           <EducationLoanForm userName={userName} loggedIn={loggedIn}/>
          </Route>
          <Route path="/HomeandPersonalLoanForm">
           <HomeandPersonalLoanForm userName={userName} loggedIn={loggedIn}/>
          </Route>
        </Switch>
      </BrowserRouter>
  
    );
};

export default App;
