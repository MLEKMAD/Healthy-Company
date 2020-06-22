import React, { Component } from "react";
import axios from "axios";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import ChefProjetService from "./services/ChefProjetService";
import EmployeeService from "./services/EmployeeService";
import "./Sign.css";
import { Link, Redirect,useHistory  } from "react-router-dom";

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
      redirect: false
    };
  }
  

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/app/User' />
    }
  }
  register(email, password) {
    // let history = useHistory();
    axios
      .post(`http://localhost:8083/loginemploye`, { email: email, password: password })
      .then((res) => {
        if (res.status == 500) {
            alert("you might want to sign up first!");
        } else{
          this.setState({
            fName:res.data.prenom_nom,
            lName:res.data.nom_emp,
            type:res.data.etat_emp,
          })
          // history.push('/app/User')
          this.setState({
            redirect: true
          })
        }
      })
      .catch((error) => {
        console.log("What happened? " + error);
      });
  }

  render() {
    const { email, password } = this.state;
    console.log("email,password", email, password);
    return (
      <div>
        <h3> Sign In</h3>
        <div className="p-field p-grid">
          <label htmlFor="firstname3" className="p-col-fixed" style={{ width: "100px" }}>
            Email
          </label>
          <div className="p-col">
            <InputText
              id="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              type="text"
            />
          </div>
        </div>
        <div className="p-field p-grid">
          <label htmlFor="lastname3" className="p-col-fixed" style={{ width: "100px" }}>
            Password
          </label>
          <div className="p-col">
            <InputText
              id="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              type="password"
            />
          </div>
        </div>
        {this.renderRedirect()}
          <Button onClick={this.register(email, password)} className="p-button-raised p-button-rounded" type="button" label="Log In" />
      
        <p>
          Create account?{" "}
          <Link to="/">
            <Button id="btn1" className="p-button-raised p-button-rounded" label="Sign Up"></Button>
          </Link>
        </p>
      </div>
    );
  }
}
export default SignIn;
