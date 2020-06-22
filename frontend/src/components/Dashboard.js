import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import { Link } from "react-router-dom";

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            layout: 'list',
            dv: [

                { nom_prenom: "lala", email:"dsf@hotmail.Fr", etat:"sain"}
            ]              
                ,
            selectedCar: null,
        };

        this.onTaskChange = this.onTaskChange.bind(this);
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }
    // componentDidMount() {
    //     this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    // }


    render() {      
        const header = (
            <div className="p-grid">
                <div style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={event => this.setState({layout: event.value})} />
                </div>
            </div>
        ); 
        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 ">
                    <Panel header="Tasks" style={{height: '100%'}}>
                        <ul className='task-list'>
                            <li>
                                <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                                <span className="task-name">Employe test</span>
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                                <span className="task-name">Employe recommandation </span>
                            </li>
                        </ul>
                    </Panel>
                </div>


            </div>
        );
    }
}