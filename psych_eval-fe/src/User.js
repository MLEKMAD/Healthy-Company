import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './User.css'
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';

const User = () => {
    const [questionnaires, setquestionnaires] = useState([
        {"title": "VW", "date": 2012, "author": "Orange" },
        {"title": "Audi", "date": 2011, "author": "Black"},
        {"title": "Renault", "date": 2005, "author": "Gray"},
        {"title": "BMW", "date": 2003, "author": "Blue"},
        {"title": "Mercedes", "date": 1995, "author": "Orange"},
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
                        <img src={`showcase/demo/images/questionnaire/${questionnaire.title}.png`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={questionnaire.title} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{questionnaire.title}</div>
                        <div className="car-subtitle">{questionnaire.date} | {questionnaire.author}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            <Button icon="pi pi-star" className="p-button-secondary" />
                            <Button icon="pi pi-cog" className="p-button-secondary" />
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