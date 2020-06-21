import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import store from './store';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SignUp } from './SignUp';
import {SignIn} from './SignIn';
import Container from './Container'
import UserRec from './UserRec'
import Questionnaire from './Questionnaire'


function App() {
  const {  questionnaireId} = store.getState();

  return (
    <div className="App">
     <Header/>
      <Questionnaire/>
     {/* <SignIn/> */}
     {/* <UserRec/> */}
     {/* <Container/> */}
    </div>    
  );
}

export default App;
