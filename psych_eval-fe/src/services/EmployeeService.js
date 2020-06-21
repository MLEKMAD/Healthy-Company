import ApiService from "./Api";
import Header from "../Header";
const HEADERS = {
  'Content-Type': 'application/json',
}
class EmployeeService {
  constructor() {
    this.myApi = new ApiService(HEADERS);
  }
  // constructor(idEmployee, nomEmployee, prenomEmployee, emailEmployee, passwordEmployee){
  //     this.idEmployee = idEmployee;
  //     this.nomEmployee = nomEmployee;
  //     this.prenomEmployee = prenomEmployee;
  //     this.emailEmployee = emailEmployee;
  //     this.passwordEmployee = passwordEmployee;
  // }
  async getEmployee(idEmployee) {
    let employee = await this.myApi.get(`/employe/${idEmployee}`);
    return employee;
  }
  async loginEmployee(email, password){
    let data = {email:email,password:password}
    let employee = await this.myApi.post(`/loginemploye`,data);
    return employee;
  }

  async getAllEmployees() {
    return await this.myApi.get(`/employe/all`);
  }
  async createEmployee(Employee) {
    await this.myApi.post("/employe/", Employee);
  }
  async updateEmployee(Employee) {
    await this.myApi.put("/employe/", Employee);
  }
  async deleteEmployee(Employee) {
    await this.myApi.delete(`/employe/${Employee}`);
  }
}
export default EmployeeService;