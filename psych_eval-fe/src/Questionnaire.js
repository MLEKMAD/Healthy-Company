import React, { useState } from 'react'
import {setQuestionnaireId} from "./actions"
import store from "./store"
import {ToggleButton} from 'primereact/togglebutton';
import {InputTextarea} from 'primereact/inputtextarea';
import {Fieldset} from 'primereact/fieldset';
import {RadioButton} from 'primereact/radiobutton';
import {SelectButton} from 'primereact/selectbutton';


const Questionnaire = (/*{questionnaire}*/)=>{



    //const {title, questionnaire_id  } = questionnaire;

     const [title, setTitle] =useState( "Anger Management");
     const [questions,setQuestions] = useState ([
        "Why mad bitch?",
        "Take a chill pill maybe?",
        "Have you tried NOT beating your wife?"
    ]);
    const [values,setValues] = useState(["Yes", "No", "Yes"]);
    
    const [answersSoFar, setAnswersSoFar] =useState ([]);
    const options =[
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'},
    ]

    const setAnswersSoFarfunc = (index, answer) => { 
        var key = index;
        var obj = {};
        obj[key] = answer;
        const i = answersSoFar.findIndex((e) => e.id === obj.id);
        if (i === -1){ 
        answersSoFar.push(obj);
        }
        else{
            answersSoFar[index] = obj;
        }
     }
     const updateFieldChanged = (index,value) => {

        console.log('index: ' + index);
        let newArr = [...values]; // copying the old datas array
        newArr[index] = value; // replace e.target.value with whatever you want to change it to
    
        setValues(newArr); // ??
    }
    
    const renderQuestionnaire = (questions) => {
      
             var q = questions.map( (question, index) =>{
                 var num= index + 1;
                 var leg = 'Question '+num;
                 return(
            <div className="p-col">
                <Fieldset legend={leg}>
                    {question}
                </Fieldset>
                <div>
                <SelectButton  value={values[index]} options={options} onChange={(e) => 
                {setAnswersSoFarfunc(index, e.value);
                    console.log(answersSoFar);
                    updateFieldChanged(index,e.value);
                    console.log(values);
                  }}/>
                 </div>

                <InputTextarea placeholder= "Justification"/>
            </div>
                 )


             }
        
         )
        return q;
        };



    return(
        renderQuestionnaire(questions)
    );
   

}

export default Questionnaire;
