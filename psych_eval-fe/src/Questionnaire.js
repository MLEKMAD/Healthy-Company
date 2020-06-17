import React from 'react'
import './Questionnaire.css'
import {setQuestionnaireId} from "./actions"
import store from "./store"



const Questionnaire = ({questionnaire})=>{
    


    const {title, questionnaire_id  } = questionnaire;


    return(
        <div className= "Questionnaire" onClick={handleQuestionnaireClick.bind(null, questionnaire_id)}>
            <div className ="User_details">
                <p className="title"> {title} </p>
                
            </div>

        </div>
    );
    function handleQuestionnaireClick(questionnaireId) {
        console.log("Id : "+questionnaireId);
        store.dispatch(setQuestionnaireId(questionnaireId));
        console.log("action dispatched");       
    }

}

export default Questionnaire;
