import React, { Component } from "react";

import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "./style/index.css";
import ChefProjetService from "./services/ChefProjetService";
import EmployeeService from "./services/EmployeeService";

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
      <div className=" p-col p-col-align-end ">
        <div className="ui-grid">
          <h1>Sign In</h1>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">@</span>
            <span className="p-float-label">
              <InputText
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.value });
                }}
                id="id1"
                className="input"
                required="true"
                type="email"
              />
              <label>Email</label>
            </span>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <span className="p-float-label">
              <InputText
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.value });
                }}
                id="id2"
                className="input"
                required="true"
                type="password"
              />
              <label>Password</label>
            </span>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">?</span>
            <span className="p-float-label">
              <Dropdown
                id="id5"
                value={this.state.type}
                options={userTypes}
                onChange={(e) => {
                  this.setState({ type: e.value });
                }}
                placeholder="Select a Type"
              />
            </span>
          </div>

          <Button onClick={this.register} id="btn" label="Submit" type="submit" className="p-button-raised p-button-rounded" />
          <p>
            You don't have an account? <Button id="btn1" className="p-button-raised p-button-rounded" label="Sign Up "></Button>
          </p>
        </div>
      </div>
    );
  }
}
export default SignIn;
