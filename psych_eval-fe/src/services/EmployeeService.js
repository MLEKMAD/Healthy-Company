import ApiService from "./Api";

class EmployeeService {
  constructor() {
    this.myApi = new ApiService();
  }
  // constructor(idEmployee, nomEmployee, prenomEmployee, emailEmployee, passwordEmployee){
  //     this.idEmployee = idEmployee;
  //     this.nomEmployee = nomEmployee;
  //     this.prenomEmployee = prenomEmployee;
  //     this.emailEmployee = emailEmployee;
  //     this.passwordEmployee = passwordEmployee;
  // }
  async getChefProject(idEmployee) {
    let employee = await this.myApi.get(`/employe/${idEmployee}`);
    return employee;
  }

  async getAllChefProjects() {
    return await this.myApi.get(`/employe/all`);
  }
  async createChefProject(Employee) {
    this.myApi.post("/employe/", Employee);
  }
  async updateChefProject(Employee) {
    this.myApi.put("/employe/", Employee);
  }
  async deleteChefProject(Employee) {
    this.myApi.delete(`/employe/${Employee}`);
  }
}
