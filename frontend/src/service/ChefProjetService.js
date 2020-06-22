import ApiService from "./Api";

class ChefProjetService {
  constructor() {
    this.myApi = new ApiService();
  }
  // constructor(idChefProjet, nomChefProjet, prenomChefProjet, emailChefProjet, passwordChefProjet){
  //     this.idChefProjet = idChefProjet;
  //     this.nomChefProjet = nomChefProjet;
  //     this.prenomChefProjet = prenomChefProjet;
  //     this.emailChefProjet = emailChefProjet;
  //     this.passwordChefProjet = passwordChefProjet;
  // }
  async getChefProject(idChefProjet) {
    let chefProjet = await this.myApi.get(`/chefprojet/${idChefProjet}`);
    return chefProjet;
  }

  async getAllChefProjects() {
    return await this.myApi.get(`/chefprojet/all`);
  }
  async createChefProject(chefProjet) {
    await this.myApi.post("/chefprojet", chefProjet);
  }
  async updateChefProject(chefProjet) {
    await this.myApi.put("/chefprojet", chefProjet);
  }
  async deleteChefProject(chefProjet) {
    await this.myApi.delete(`/chefprojet/${chefProjet}`);
  }
}
export default ChefProjetService;
