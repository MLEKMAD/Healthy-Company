import React from 'react'
import './Main.css';
import Container from './Container'
import Questionnaire from './Questionnaire'
import QuestionnaireWindow from "./QuestionnaireWindow";
import store from './store'
import User from './User'
import UserRec from './UserRec';
import SignIn from './SignIn';
import Header from './Header'
import MakeQuestionnaire from './MakeQuestionnaire';
import Routes from './routes';

const Main = () =>{
    const renderMainContent = () =>{

     
            return <Routes/>;

    
    }
    
    return(
        <main className="Main">
            {renderMainContent()}
            </main>
    )
}
export default Main;