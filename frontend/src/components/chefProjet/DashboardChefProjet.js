import React, { Component } from 'react';
import {CarService} from '../../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';

export class DashboardChefProjet extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            cars:[                
            {"nom test": "test 1","test":""},
            {"nom test": "test 2", "test":""},
            {"nom test": "test 3", "test":""}
            ],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            },
            fullcalendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultDate: '2017-02-01',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true
            },
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.carservice ={
            "data": [                                   

            ]
        }
    }
    // componentDidMount() {
    //     this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    // }
    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    
    onUpload() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }
    render() {        
        return (<div>


            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-6">
                    <div className="card summary">
                        <span className="title">Users</span>
                        <span className="detail">Nombre d'employes</span>
                        <span className="count visitors">12</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card summary">
                        <span className="title">Bon santé</span>
                        <span className="detail">Nombre d'employes sain</span>
                        <span className="count visitors">6</span>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-6">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#ef6262',color:'#a83d3b'}}><span>TM</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-question-circle"/>
                            <span>Total Malade</span>
                            <span className="count">6</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-6">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#007be5',color:'#00448f'}}><span>TT</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-search"/>
                            <span>Total Test</span>
                            <span className="count">20</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card card-w-title ">
                        <h1>Ajouter employé</h1>
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Nomp"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Prenom"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Email"/>
                            </div>
                            <div className="p-col-12 p-md-6 center">
                                <InputText placeholder="Etat=None" disabled={true}/>
                            </div>
                            <div className="p-col-12 p-md-6" style={{textAlign:'center'}}>
                                    <Button label="Add employé" style={{marginBottom:'10px'}} className="p-button-success" />
                            </div>
                        </div>
                    </div>
                    <div className="p-grid">
                    <div className="p-col-12 p-lg-6">
                        <div className="card card-w-title">
                            <h1>Upload test pour les employés </h1>
                            <Growl ref={(el) => this.growl = el} />
                            <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} multiple={true} accept="image/*" maxFileSize={1000000} />
                        </div>
                    </div>
                    
                    <div className="card  card-w-title p-col-12 p-lg-6 p-xl-6">
                        <h1>historique </h1>
                        <DataTable value={this.state.cars}  style={{marginBottom: '20px'}} responsive={true}
                                selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.value})}>
                            <Column field="nom test" header="nom test" sortable={true} />
                            <Column field="test" header="test" sortable={true} />
                        </DataTable>
                    </div>
                </div>
                    
        </div>
        );
    }
}