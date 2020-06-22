import React from "react";
import { Switch, Route } from "react-router-dom";
//import Route from './Route';
import { BrowserRouter as Router } from 'react-router-dom';
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import Header from "../Header";
import store from "../store";
import Container from "../Container";
import UserRec from "../UserRec";
import Questionnaire from "../Questionnaire";
import User from "../User";

export default function Routes () {
  const regex = /^\/app\/.*/;
  if(regex.test(window.location.pathname)){
    return (
  
      <Switch>
      <Route exact path="/app/signin">
          <SignIn />
        </Route>
        <Route exact path="/app/employees">
          <Container />
        </Route>
        <Route exact path="/app/User">
          <User />
        </Route>
       
        
        <Route exact path="/app/userrec">
          <UserRec />
        </Route>
        <Route exact path="/app/quest">
          <Questionnaire />
        </Route>
        <Route exact path="/">
          <SignUp />
        </Route>
      </Switch>
    )}else{
      return <div></div>
    }
  }
   

