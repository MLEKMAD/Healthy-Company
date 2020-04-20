import React from 'react'
import './Questionnaire.css'


const Questionnaire = ({questionnaire})=>{
    const {title, questionnaireId  } = questionnaire;

    return(
        <div className= "Questionnaire">
            <div className ="User_details">
                <p className="title"> {title} </p>
                
            </div>

        </div>
    );

}

export default Questionnaire;
