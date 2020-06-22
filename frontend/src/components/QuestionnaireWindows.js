import React from "react";
import Header from "./Header";
import store from "./store";
import _ from "lodash";
import "./QuestionnaireWindow.css";

const ChatWindow = ({ questionnaireId }) => {
  const state = store.getState();
  //const activeUser = state.contacts[activeUserId]
  const activeQstns = state.questions[questionnaireId];

  //const {typing} = state;

  return <div className="ChatWindow">hello</div>;
};

export default ChatWindow;
