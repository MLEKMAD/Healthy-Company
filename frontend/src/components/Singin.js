import React, { Component } from "react";

import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import {Dropdown} from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import ChefProjetService from "../service/ChefProjetService";
import EmployeeService from "../service/EmployeeService";
import "./Sign.css"
import { Link } from "react-router-dom";

const userTypes = [
  { label: "employee", value: 0 },
  { label: "Project Manager", value: 1 },
];
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      password: "",
      type: null,
    };
  }
  register() {

  }
  render() {
    return (
      <div>
        <h3> Sign In</h3>
      <div className="p-field p-grid">
      <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Email</label>
      <div className="p-col">
          <InputText id="email" value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }} type="text"/>
      </div>
  </div>
    <div className="p-field p-grid">
      <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Password</label>
      <div className="p-col">
      <InputText id="password" value={this.state.password} onChange={(e) => {this.setState({ password: e.target.value });}} type="password"/>
      </div>

    </div>
      <div className="p-col">
              <Dropdown
                id="id5"
                value={this.state.type}
                options={userTypes}
                onChange={(e) => {
                  this.setState({ type: e.value });
                }}
                placeholder="Select a Type"
              />
              </div>
    <p>Create account? 
    <Link to= '/Dashboard' >
          <Button onClick={this.register()} id="btn" label="Log In" type="submit" className="p-button-raised p-button-rounded" />
    </Link>
    <Link to= '/signup' label="Sign Up" >
    <Button type="button" label="Sign up"/>
    </Link>
          </p>
        </div>
    

    )
  }
}
export default SignIn;
