import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';
import store from './store';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




function App() {
  const {  questionnaireId} = store.getState();

  return (
    <div className="App">
      <Header />
      <Main questionnaireId={questionnaireId} />
    </div>    
  );
}

export default App;
