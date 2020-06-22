import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import Signin  from './components/Singin';
import Signup  from './components/Signup';
import DashboardChefProjetApp  from './components/DashboardChefProjetApp';
import DashboardEmpApp  from './components/DashboardEmpApp';

import Questionnaire  from './components/Questionnaire';
import Container  from './components/Container';


import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/signup" component={Signup} />          
                <Route exact path="/Dashboard" component={App} />
                <Route exact path="/DashbordChefProjet" component={DashboardChefProjetApp} />
                <Route exact path="/DashbordEmp" component={DashboardEmpApp} />

                <Route exact path="/Questionnaire" component={Questionnaire} />
                <Route exact path="/Container" component={Container} />


                
            </Switch>
        </BrowserRouter>,
    document.getElementById('root')
);

{/* <HashRouter>
<ScrollToTop>
<App></App>
        </ScrollToTop>
    </HashRouter> */}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
