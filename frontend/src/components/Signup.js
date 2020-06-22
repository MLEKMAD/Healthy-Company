import React, { Component } from "react";
import axios from "axios";
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
import { Link, Redirect } from "react-router-dom";

const userTypes = [
  { label: "employee", value: 0 },
  { label: "Project Manager", value: 1 },
];
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      password: "",
      etat: "nothing",
      redirect: null,
      type: null,
    };
  }
  register() {
    let employee = {
      nom_emp: this.state.lName,
      prenom_emp: this.state.fName,
      email_emp: this.state.email,
      password_emp: this.state.password,
      etat_emp: this.state.etat,
      id_chef_projet: 1,
    };
    console.log("employee", employee);

    axios
      .post("http://localhost:8083/employe", JSON.stringify(employee), {
        headers: { "content-type": "application/json; charset=UTF-8" },
      })
      .then((res) => {
        console.log(res);
        this.setState({ redirect: "/DashbordEmp" });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
                  this.setState({ lName: e.target.value });
                }}
                id="id3"
                className="input"
                required={true}
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
                  this.setState({ fName: e.target.value });
                }}
                id="id4"
                className="input"
                required={true}
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
                  this.setState({ email: e.target.value });
                }}
                id="id1"
                className="input"
                required={true}
                type="email"
              />
              <label>Email</label>
            </span>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <span className="p-float-label">
              <InputText
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                id="id2"
                className="input"
                required={true}
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
                  this.setState({ type: e.target.value });
                }}
                placeholder="Select a Type"
                required={true}
              />
            </span>
          </div>

          <Button
            onClick={() => {
              this.register();
            }}
            id="btn"
            label="Submit"
            type="submit"
            className="p-button-raised p-button-rounded"
          />

          <p>
            You already have an account?
            <Link to="/" label="Sign Up">
              <Button
                id="btn1"
                className="p-button-raised p-button-rounded"
                label="Sign In"
              ></Button>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default SignUp;
