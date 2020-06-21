import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import store from './store';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SignUp } from './SignUp';
import {SignIn} from './SignIn'




function App() {

  return (
    <div className="App">
      {/* <Main questionnaireId={questionnaireId} /> */}
      <Header />
      <Main/>
    </div>    
  );
}

export default App;
