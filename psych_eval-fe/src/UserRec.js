import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './User.css'
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
const UserRec = () => {
    const [Recommendations, setRecommendations] = useState([
        {"title": "VW", "date": 2012, "author": "Orange" , "Recommendation" : "Brush your teeth"},
        {"title": "Audi", "date": 2011, "author": "Black",  "Recommendation" : "Take out the garbage"},
        {"title": "Renault", "date": 2005, "author": "Gray",  "Recommendation" : "Brush y"},
        {"title": "BMW", "date": 2003, "author": "Blue",  "Recommendation" : "th"},
        {"title": "Mercedes", "date": 1995, "author": "Orange",  "Recommendation" : "Brush wcwx teeth"},
    ]);
    const [text, setText] = useState();

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
    const [displayBasic, setDisplayBasic] = useState(false);
  
    const [position, setPosition] = useState('center');

    const onClick = (stateMethod, recommendation) => {
        stateMethod(true);
        setText(recommendation);
    }

    const onHide = (stateMethod) => {
        stateMethod(false);
    }

    const renderFooter = (stateMethod) => {
        return (
            <div>
                <Button label="Ok" icon="pi pi-check" onClick={() => onHide(stateMethod)} />
            </div>
        );
    }

    useEffect(() => {
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const recommendationsTemplate = (recommendation) => {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={`showcase/demo/images/questionnaire/${recommendation.title}.png`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={recommendation.title} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{recommendation.title}</div>
                        <div className="car-subtitle">{recommendation.date} | {recommendation.author}</div>

                        <div className="car-buttons">
                        <Button label="Show" icon="pi pi-external-link" onClick={() => {onClick(setDisplayBasic,recommendation.Recommendation);console.log(text)}}/>
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const customHeader = <h2>Your Recommendations</h2>

    return (
        <div className="carousel-demo">
   

            <Carousel value={Recommendations} itemTemplate={recommendationsTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                responsiveOptions={responsiveOptions} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

<Dialog header="Recommendation" visible={displayBasic} style={{width: '50vw'}} onHide={() => onHide(setDisplayBasic)} footer={renderFooter(setDisplayBasic)}>
    <p>{text}</p>
                     </Dialog> 
        </div>
    );
}
                
export default UserRec;