const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const _ = require("lodash"); // lodash is a utility lib for Javascript

const questionnaires2 = generateQuestionnaires(10);
export const questionnaires = _.mapKeys(questionnaires2, "questionnaire_id");
export const getQuestions = questionsPerQuestionnaire => {
  let questions = {};
  _.forEach(questionnaires, questionnaire => {
    questions[questionnaire.questionnaire_id] = {
      ..._.mapKeys(generateQuestions(questionsPerQuestionnaire), "number")
    };
  });
  return questions;
};

// just an example of how the state object is structured
export const state = {
  questions: getQuestions(10),
  typing: "",
  questionnaires,
  activeQuestionnaireId: null
};

/**
 * @returns {Object} - a new user object
 */
export function generateQuestionnaire() {
  return {
    title: txtgen.sentence(),
    questionnaire_id: shortid.generate()
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateQuestion(number) {
  return {
    number,
    question: txtgen.sentence(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateQuestionnaires(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateQuestionnaire());
}

function generateQuestions(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateQuestion(i));
}