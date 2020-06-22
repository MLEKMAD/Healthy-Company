import { combineReducers } from "redux";

import questionnaireId from "./questionnaireId";
import typing from "./typing"
import questionnaires from "./questionnaires"
import questions from "./questions"

export default combineReducers({
    questionnaires,
    questionnaireId,
    questions,
    typing
  });

