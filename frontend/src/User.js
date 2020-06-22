import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './User.css'
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import { Link } from 'react-router-dom';

const User = () => {
    const [questionnaires, setquestionnaires] = useState([
        {"title": "Questionnaire 1", "date": 2020, "author": "LAHLALI HATIM" },
        {"title": "Questionnaire 2", "date": 2020, "author": "LAHLALI HATIM"},
        {"title": "Questionnaire 3", "date": 2020, "author": "LAHLALI HATIM"},
        {"title": "Questionnaire 4", "date": 2020, "author": "LAHLALI HATIM"},
        {"title": "Questionnaire 5", "date": 2020, "author": "LAHLALI HATIM"},
    ]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const questionnaireTemplate = (questionnaire) => {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={"assets/layout/images/quest.png"}  alt={questionnaire.title} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{questionnaire.title}</div>
                        <div className="car-subtitle">{questionnaire.date} | {questionnaire.author}</div>

                        <div className="car-buttons">
                            <Link to="/Questionnaire">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const customHeader = <h2>Available Questionnaires</h2>

    return (
        <div className="carousel-demo">
   

            <Carousel value={questionnaires} itemTemplate={questionnaireTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                responsiveOptions={responsiveOptions} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>


        </div>
    );
}
                
export default User;