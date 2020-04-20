import React from 'react'
import './Main.css';
import Container from './Container'
import QuestionnaireWindow from "./QuestionnaireWindow";
import store from './store'

const Main = ({user, activeUserId}) =>{
    const { questionnaires} = store.getState();

    const renderMainContent = () =>{
        console.log(questionnaires);

        if(!activeUserId){
            return <Container q={questionnaires}/>;
        }
        else{
            return <QuestionnaireWindow activeUserId ={activeUserId} />;
    }
    }
    
    return(
        <main className="Main">{renderMainContent()}</main>
    )
}
export default Main;