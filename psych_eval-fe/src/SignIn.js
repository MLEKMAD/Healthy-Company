import React, { Component } from "react";

import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import ChefProjetService from "./services/ChefProjetService";
import EmployeeService from "./services/EmployeeService";
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
    const employeeApi = new EmployeeService();
    let employee = {
      lName: this.state.lName,
      fName: this.state.fName,
      email: this.state.email,
      password: this.state.password,
      state: "initial",
    };
    employeeApi.getEmployee(employee).then((response) => {
      console.log(response);
    });
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
                  this.setState({ email: e.value });
                }} type="text"/>
      </div>
  </div>
  <div className="p-field p-grid">
      <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Password</label>
      <div className="p-col">
      <InputText id="password" value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.value });
                }} type="password"/>

      </div>

  </div>
  <Link to="/User">
  <Button type="button" label="Log In"/>
  </Link>
  <p>
           Create account? <Button id="btn1" className="p-button-raised p-button-rounded" label="Sign Up"></Button>
          </p>
        </div>

        
 




    );
  }
}
export default SignIn;
