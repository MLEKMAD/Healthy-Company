import './Container.css';
import Questionnaire from './Questionnaire'
import  _ from 'lodash';
import React from "react"
const  Container = ({q})=>{
    console.log("q");

    console.log(q);

    return( 
    <div className="Container">
        {_.values(q).map(questionnaire => <Questionnaire questionnaire={questionnaire} />)}
    </div>
    );
};
export default Container;