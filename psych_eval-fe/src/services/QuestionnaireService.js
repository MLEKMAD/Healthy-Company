import ApiService from "./Api";

class QuestionnaireService {
  constructor() {
    this.myApi = new ApiService();
  }

  async getQuestionnaires() {
   //returns all questionnaires
  }
  async getQuestions(Questionnaire){
      //returns questions in questionnaire
  }
}