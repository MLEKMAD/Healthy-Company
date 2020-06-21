import React from "react";
import { Switch, Route } from "react-router-dom";
//import Route from './Route';

import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import Header from "../Header";
import store from "../store";
import Container from "../Container";
import UserRec from "../UserRec";
import Questionnaire from "../Questionnaire";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/employees">
          <Container />
        </Route>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/userrec">
          <UserRec />
        </Route>
        <Route path="/quest">
          <Questionnaire />
        </Route>
        <Route path="/quest">
        <Header/>
          <Questionnaire />
        </Route>
      </Switch>
    );
  }
}
