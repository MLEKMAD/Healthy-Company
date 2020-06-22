import React, { Component } from "react";
import axios from "axios";
import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import ChefProjetService from "../service/ChefProjetService";
import EmployeeService from "../service/EmployeeService";
import { Link, Redirect } from "react-router-dom";



const userTypes = [
  { label: "employee", value: 0 },
  { label: "Project Manager", value: 1 },
];
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handleChangeE = this.handleChangeE.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      password: "",
      mentalState: "",
      type: null,
      redirect: null,
    };
  }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/app/User' />
  //   }
  // }
  register(email, password) {
    // let history = useHistory();
    if (this.state.type === 0) {
      axios
        .post(`http://localhost:8083/loginemploye?email=${email}&password=${password}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem('IdEmploye', res.data.id_employe);
            this.setState({
              lName: res.data.nom_emp,
              fName: res.data.prenom_emp,
              mentalState: res.data.etat_emp,
              redirect: "/DashbordEmp",
            });
          } 
        })
        .catch((error) => {
          if (error.response) {
            alert("your email or your password are incorrect ");

            console.log(error.response);
          }
        });
    } else {
      axios
        .post(`http://localhost:8083/loginchefprojet?email=${email}&password=${password}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.setState({
              lName: res.data.nom_chef_projet,
              fName: res.data.prenom_chef_projet,
              redirect: "/Dashbord",
            });
          } 
        })
        .catch((error) => {
          if (error.response) {
            alert("your email or your password are incorrect ");

            console.log(error.response);
          }
        });
    }
  }
  handleChangeE(event) {
    this.setState({ email: event.target.value });
  }
  handleChangeP(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    const { email, password } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor :' rgb(3, 252, 186)',
        borderRadius: '25px',
         width: '300px',
        height: '500px', 

    }}>
        <h1 style ={{textAlign :'center'}}> Sign In</h1>
        <br/>
        <br/>
        <br/>

        <div className="p-field p-grid">
          
          
          <span className="p-float-label" style={{
              margin:'0',
              position: 'absolute',
               top :'15%',
               left: '50%',
             transform: 'translate(-50%, -50%)'}}>
          <InputText id="email" value={this.state.email} onChange={this.handleChangeE} type="email" required={true} />
                <label htmlFor="float-input">Email</label>
            </span>
        </div>
        <div className="p-field p-grid">
      

          
          <span className="p-float-label" style={{
              margin:'0',
              position: 'absolute',
              top :'25%',

               left: '50%',
             transform: 'translate(-50%, -50%)'}}>
          <InputText id="password" required={true} value={this.state.password} onChange={this.handleChangeP} type="password" />
                <label htmlFor="float-input">Password</label>
            </span>
        </div>
        <div className="p-col" style={{
              margin:'0',
              position: 'absolute',
              top :'35%',

               left: '50%',
             transform: 'translate(-50%, -50%)'}}>
          <Dropdown
            id="id5"
            value={this.state.type}
            options={userTypes}
            onChange={(e) => {
              this.setState({ type: e.target.value });
            }}
            placeholder="Select a Type"
          />
        </div>
        <br/>
        <br/>

        <Button style={{
              margin:'0',
              position: 'absolute',
               top :'60%',
               left: '50%',
             transform: 'translate(-50%, -50%)'}}
             onClick={()=>{this.register(email, password)}} type="submit" label="Log In" />
        <br/>      <br/> <br/>   <br/> <br/>  <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 
        <br/> 

        <p>
          Create account? <br/>          <br/>
      
          <Link to="/signup" label="Sign Up">
            <Button style={{
              margin:'0',
              position: 'absolute',
               top :'80%',
               left: '50%',
             transform: 'translate(-50%, -50%)'}} type="button" label="Sign up" />
          </Link>
        </p>
      </div>
    );
  }
}
export default SignIn;
