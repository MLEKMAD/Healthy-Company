import React from "react";
import Header from "./Header";
import store from "./store"
import  _ from 'lodash';
import "./QuestionnaireWindow.css"

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId]
  const activeMsgs = state.messages[activeUserId]

  const {typing} = state;
  
  return (
    <div className="ChatWindow">
      <Header user={activeUser}/>

    </div>
  );
};

export default ChatWindow;