import React, { useEffect,useState } from 'react'
import {setQuestionnaireId} from "../actions";
import store from "../store";
import {ToggleButton} from 'primereact/togglebutton';
import {InputTextarea} from 'primereact/inputtextarea';
import {Fieldset} from 'primereact/fieldset';
import {RadioButton} from 'primereact/radiobutton';
import {SelectButton} from 'primereact/selectbutton';
import TestsService from '../service/TestsService';


const Questionnaire = (/*{questionnaire}*/)=>{


    useEffect(async () => {
       
     


    })
    //const {title, questionnaire_id  } = questionnaire;

     const [title, setTitle] =useState( "Anger Management");
     const [questions,setQuestions] = useState ([
        "Why mad bitch?",
        "Take a chill pill maybe?",
        "Have you tried NOT beating your wife?"
    ]);
    const [values,setValues] = useState([]);
    
    const [answersSoFar, setAnswersSoFar] =useState ([]);
    const options =[
        {label: 'Yes', value: 'Yes'},
        {label: 'No', value: 'No'},
    ]

    const setAnswersSoFarfunc = (index, answer) => { 
        var key = index;
        var obj2 = {};
        obj2[index]={
            answer : "",
            justification :""
        }
        obj2[key].answer = answer;
        const i = answersSoFar.findIndex((e) => e.id === obj2.id);
        if (i === -1){ 
        answersSoFar.push(obj2);
        }
        else{
            obj2[key].justification = answersSoFar[i][i].justification;

            answersSoFar[index] = obj2;
        }
     }
     const setJustificationsSoFarfunc = (index, just) => { 
        var key = index;
        var obj =  {};
        obj[index]={
            answer : "",
            justification :""
        }
        obj[key].justification = just;
        const i = answersSoFar.findIndex((e) => e.id === obj.id);
        if (i === -1){ 
        answersSoFar.push(obj);
        }
        else{
            answersSoFar[index][index].justification = just;
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

                <InputTextarea placeholder= "Justification" onChange = {(e)=> 
                setJustificationsSoFarfunc(index, e.target.value)
                }/>
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
