import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'; 
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Routes from "./routes"

const history = createBrowserHistory();
const render = () =>
{
    fancyLog();
    ReactDOM.render(
      <Router  history={history}>
    <App />
    <Routes/>
    </Router>
    , document.getElementById('root'));
};

render();
store.subscribe(render);
serviceWorker.register();

function fancyLog() {
  console.log("%c State ", "background: purple; color: #FFF");
  console.log(store.getState());
}