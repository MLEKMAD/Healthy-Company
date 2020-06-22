import "./Container.css";
import Questionnaire from "./Questionnaire";
import _ from "lodash";
import "primeicons/primeicons.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import ReactDOM from "react-dom";
import EmployeeService from "../service/EmployeeService";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { ProgressBar } from "primereact/progressbar";
import classNames from "classnames";

const Container = () => {
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedUsers, setSelectedRepresentatives] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  let dt = useRef(null);

  let [employees, setEmployees] = useState(null);
  useEffect(() => {
    const employeesApi = new EmployeeService();
    let employees = [];
    employees = employeesApi.getAllEmployees();
    setEmployees(employees);
  });

  const renderHeader = () => {
    return (
      <div>
        List of Employees
        <div className="p-datatable-globalfilter-container">
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Global Search"
          />
        </div>
      </div>
    );
  };

  const renderDateFilter = () => {
    return (
      <Calendar
        value={dateFilter}
        onChange={onDateFilterChange}
        placeholder="Registration Date"
        dateFormat="yy-mm-dd"
        className="p-column-filter"
      />
    );
  };

  const onDateFilterChange = (event) => {
    if (event.value !== null)
      dt.current.filter(formatDate(event.value), "date", "equals");
    else dt.current.filter(null, "date", "equals");

    setDateFilter(event.value);
  };

  const filterDate = (value, filter) => {
    if (
      filter === undefined ||
      filter === null ||
      (typeof filter === "string" && filter.trim() === "")
    ) {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return value === formatDate(filter);
  };

  const formatDate = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    return date.getFullYear() + "-" + month + "-" + day;
  };

  const actionBodyTemplate = () => {
    return (
      <Button
        type="button"
        icon="pi pi-cog"
        className="p-button-secondary"
      ></Button>
    );
  };

  const header = renderHeader();
  const dateFilterEl = renderDateFilter();

  return (
    <div className="datatable-doc-demo">
      <DataTable
        ref={dt}
        value={employees}
        header={header}
        responsive
        className="p-datatable-customers"
        dataKey="id"
        rowHover
        globalFilter={globalFilter}
        selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedCustomers(e.value)}
        paginator
        rows={10}
        emptyMessage="No customers found"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
      >
        <Column selectionMode="multiple" style={{ width: "3em" }} />
        <Column
          field="nom_emp"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search by name"
        />
        <Column
          field="test"
          header="test"
          sortable
          filter
          filterPlaceholder="Search by test"
        />
        <Column
          field="status"
          header="status"
          sortable
          filter
          filterPlaceholder="Search by name"
        />
        <Column
          field="date"
          header="Date"
          sortable
          filter
          filterMatchMode="custom"
          filterFunction={filterDate}
          filterElement={dateFilterEl}
        />
        <Column
          body={actionBodyTemplate}
          headerStyle={{ width: "8em", textAlign: "center" }}
          bodyStyle={{ textAlign: "center", overflow: "visible" }}
        />
      </DataTable>
    </div>
  );
};

export default Container;
