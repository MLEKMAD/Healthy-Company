import React, { Component } from "react";

import "primereact/resources/themes/nova-light/theme.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import axios from 'axios'
import "./Sign.css";
import Axios from "axios";

const userTypes = [
  { label: "employee", value: 0 },
  { label: "Project Manager", value: 1 },
];
export class MakeQuestionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: "",
      title: "",
      questions: [],
    };
  }

  // useEffect(() => {
  //   axios
  // })


  render() {
    return (
      <div>
        <h3> Make a Questionnaire</h3>
        <div className="p-field p-grid">
          <label htmlFor="firstname3" className="p-col-fixed" style={{ width: "100px" }}>
            Title
          </label>
          <div className="p-col">
            <InputText
              id="title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
              type="text"
            />
          </div>
        </div>
        <div className="p-field p-grid">
          <label htmlFor="lastname3" className="p-col-fixed" style={{ width: "100px" }}>
            question
          </label>
          <div className="p-col">
            <InputText
              id="password"
              value={this.state.currentQuestion}
              onChange={(e) => {
                this.setState({ currentQuestion: e.target.value });
              }}
              type="text"
            />
          </div>
        </div>
        <Button
          type="button"
          label="Add question"
          onClick={() => {
            let newArr = [...this.state.questions];

            newArr.push(this.state.currentQuestion);
            this.setState({ questions: newArr });
            console.log(this.state.questions);
            console.log(this.state);

            console.log(this.state.currentQuestion);
          }}
        />
        <Button type="button" label="Submit questionnaire" />
      </div>
    );
  }
}
export default MakeQuestionnaire;
