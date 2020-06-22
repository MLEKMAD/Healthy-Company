import ApiService from "./Api";

class QuestionnaireService {
  constructor() {
    this.myApi = new ApiService();
  }

  async getQuestionnaires() {
    const questionnaires = this.myApi.get(`/questionnaire/all`);
    console.log("return from backend : " + questionnaires);
    return await questionnaires;
  }
  async getQuestions(Questionnaire) {
    //returns questions in questionnaire
  }
}
