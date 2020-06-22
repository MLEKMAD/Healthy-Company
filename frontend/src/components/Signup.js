import React, { Component } from "react";

import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
//import "./style/index.css";
import ChefProjetService from "../service/ChefProjetService";
import EmployeeService from "../service/EmployeeService";
import { Link } from "react-router-dom";

const userTypes = [
  { label: "employee", value: 0 },
  { label: "Project Manager", value: 1 },
];
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      password: "",
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
      type: null,
    };
    employeeApi.createEmployee(employee).then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="p-col p-col-align-end">
        <div className="ui-grid">
          <h1>Sign Up</h1>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <span className="p-float-label">
              <InputText
                value={this.state.lName}
                onChange={(e) => {
                  this.setState({ lName: e.value });
                }}
                id="id3"
                className="input"
                required="true"
              />
              <label>Last Name</label>
            </span>
          </div>

          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <span className="p-float-label">
              <InputText
                value={this.state.fName}
                onChange={(e) => {
                  this.setState({ fName: e.value });
                }}
                id="id4"
                className="input"
                required="true"
              />
              <label>First Name</label>
            </span>
          </div>
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
    <Link to= '/' label="Sign Up" >
          <Button onClick={this.register} id="btn" label="Submit" type="submit" className="p-button-raised p-button-rounded" />
    </Link>

          <p>
            You already have an account?
    <Link to= '/' label="Sign Up" >
             <Button id="btn1" className="p-button-raised p-button-rounded" label="Sign In"></Button>
    </Link>

          </p>
        </div>
      </div>
    );
  }
}
export default SignUp;
