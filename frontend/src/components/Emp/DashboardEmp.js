
import React, { Component } from "react";
import { CarService } from "../../service/CarService";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Growl } from "primereact/growl";
import { FileUpload } from "primereact/fileupload";
import { Messages } from "primereact/messages";
import Questionnaire from '../Questionnaire';

export class DashboardEmp extends Component {
  constructor() {
    super();
    this.showSuccess = this.showSuccess.bind(this);
    this.onUpload = this.onUpload.bind(this)
    this.state = {
      tasks: [],
      tests: [
        { "nom test": "test 1", test: "" },
        { "nom test": "test 2", test: "" },
        { "nom test": "test 3", test: "" },
      ],
      city: null,
      selectedCar: null,
      lineData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#007be5",
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#20d077",
          },
        ],
      },
      fullcalendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: "2017-02-01",
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        editable: true,
      },
    };

    this.onTaskChange = this.onTaskChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
  }


  onUpload(e){
    this.growl.show({
        severity: 'info',
        summary: 'Success',
        detail: 'File Uploaded'
    });
    this.messages.show({
        severity: 'info',
        summary: 'Success',
        detail: 'File Uploaded'
    });

    console.log("event",e.value);
  }
  onTaskChange(e) {
    let selectedTasks = [...this.state.tasks];
    if (e.checked) selectedTasks.push(e.value);
    else selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

    this.setState({ tasks: selectedTasks });
  }

  onCityChange(e) {
    this.setState({ city: e.value });
  }


  // componentDidMount() {
  //     this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
  // }
  showSuccess() {
    let msg = { severity: "success", summary: "Succes du téléchargement" };
    this.growl.show(msg);
    this.messages.show(msg);
  }
  render() {
      let employe = localStorage.getItem("idEmploye");
      console.log("employee",employe)
    return (
      <div>
        <div className="card card-w-title ">
          <h1>Information personnelle</h1>
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <InputText placeholder="Lekmad" disabled={true} />
            </div>
            <div className="p-col-12 p-md-4">
              <InputText placeholder="Mohammed" disabled={true} />
            </div>
            <div className="p-col-12 p-md-4">
              <InputText placeholder="Mohammed@gmail.com" disabled={true} />
            </div>
            <div className="p-col-12 " style={{ textAlign: "center" }}>
              <Button label="Malade" style={{ marginBottom: "10px" }} className="p-button-danger p-button-rounded" />
            </div>
          </div>
        </div>
        <div className="p-grid">
          <div className="p-col-12 p-lg-6">
            <div className="card card-w-title">
              <div className="p-col" style={{ textAlign: "center" }}>
                <h1>Telecharger test</h1>
                <a href={`http://localhost:8084/downloadFile/1`} download>
                  <Button onClick={this.showSuccess} label="Download test" className="p-button-success" style={{ width: "10em", marginRight: ".25em" }} />
                </a>
                <Messages ref={(el) => (this.messages = el)} />
                <Growl ref={(el) => (this.growl = el)} style={{ marginTop: "75px" }} />
              </div>
            </div>
            <div className="card card-w-title">
              <h1>Upload reponse du test </h1>
              <Growl ref={(el) => (this.growl = el)} />
              <FileUpload name="demo[]" url={"http://localhost:8084/uploadFile/1"}  onUpload={this.onUpload} multiple={true} accept="*" maxFileSize={1000000} />
            </div>
          </div>
          <div className="card  card-w-title p-col-12 p-lg-6 p-xl-6">
            <h1>Mon historique </h1>
            <DataTable value={this.state.tests} style={{ marginBottom: "20px" }} responsive={true} selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({ selectedCar: e.value })}>
              <Column field="nom test" header="nom test" sortable={true} />
              <Column field="test" header="test" sortable={true} />
            </DataTable>
          </div>
          <Questionnaire/>

        </div>
        
      </div>
    );
  }
}
