import React, { Component } from "react";
import { Panel } from "primereact/panel";
import { Checkbox } from "primereact/checkbox";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      city: null,
      layout: "list",
      data: [
        { nom_prenom: "lekmad mohamed", email: "mohamed", etat: "malade" },
        { nom_prenom: "sdfgdfsg", email: "dsf", etat: "malade" },
        { nom_prenom: "lala", email: "dsf@hotmail.Fr", etat: "sain" },
      ],
      selectedCar: null,
    };

    this.onTaskChange = this.onTaskChange.bind(this);
  }

  onTaskChange(e) {
    let selectedTasks = [...this.state.tasks];
    if (e.checked) selectedTasks.push(e.value);
    else selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

    this.setState({ tasks: selectedTasks });
  }

  dataViewItemTemplate(data, layout) {
    let src = "assets/layout/images/avatar_4.png";
    if (layout === "list") {
      return (
        <div
          className="p-grid"
          style={{ padding: "2em", borderBottom: "1px solid #d9d9d9" }}
        >
          <div className="p-col-12 p-md-3">
            <img src={src} />
          </div>
          <div className="p-col-12 p-md-8 car-details">
            <div className="p-grid">
              <div className="p-col-2 p-sm-6">Nom et prenom:</div>
              <div className="p-col-10 p-sm-6">{data.nom_prenom}</div>

              <div className="p-col-2 p-sm-6">email:</div>
              <div className="p-col-10 p-sm-6">{data.email}</div>

              <div className="p-col-2 p-sm-6">etat :</div>
              <div className="p-col-10 p-sm-6">{data.etat}</div>
            </div>
          </div>
          <div
            className="p-col-12 p-md-1 search-icon"
            style={{ marginTop: "40px" }}
          >
            <Link to="/DashbordEmp">
              <Button
                onClick={this.showSuccess}
                label="Go to his Dashboard"
                className="p-button-success"
                style={{ width: "10em", marginRight: ".25em" }}
              />
            </Link>
          </div>
        </div>
      );
    }
    if (layout === "grid") {
      return (
        <div style={{ padding: ".5em" }} className="p-col-12 p-md-3">
          <Panel header={data.nom_prenom} style={{ textAlign: "center" }}>
            <img src={src} />
            <div className="car-detail">
              {data.email} - {data.etat}
            </div>
            <Link to="/DashbordEmp">
              <Button
                onClick={this.showSuccess}
                label="Download test"
                className="p-button-success"
                style={{ width: "10em", marginRight: ".25em" }}
              />
            </Link>
          </Panel>
        </div>
      );
    }
  }

  render() {
    const header = (
      <div className="p-grid">
        <div style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={this.state.layout}
            onChange={(event) => this.setState({ layout: event.value })}
          />
        </div>
      </div>
    );
    const data = this.state.data;
    return (
      <div className="p-grid p-fluid dashboard">
        <div className="p-col-12 ">
          <Panel header="Tasks" style={{ height: "100%" }}>
            <ul className="task-list">
              <li>
                <Checkbox
                  value="task1"
                  onChange={this.onTaskChange}
                  checked={
                    this.state.tasks.indexOf("task1") > -1 ? true : false
                  }
                ></Checkbox>
                <span className="task-name">Employe test</span>
              </li>
              <li>
                <Checkbox
                  value="task2"
                  onChange={this.onTaskChange}
                  checked={
                    this.state.tasks.indexOf("task2") > -1 ? true : false
                  }
                ></Checkbox>
                <span className="task-name">Employe recommandation </span>
              </li>
            </ul>
          </Panel>
        </div>
        {/* <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Liste des employés</h1>
                        <DataView  value={data}  itemTemplate={this.dataViewItemTemplate} layout={this.state.layout}
                                   paginator={true} rows={10} header={header} ></DataView>
                    </div>
                </div> */}
      </div>
    );
  }
}
