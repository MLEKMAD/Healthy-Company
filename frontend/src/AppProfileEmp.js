import React, { Component } from 'react';
import classNames from 'classnames';

export class AppProfileEmp extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="layout-profile">
                <div>
                    <img src="assets/layout/images/avatar_4.png" alt="" />
                </div>
                <button className="p-link layout-profile-link" onClick={this.onClick}>
                    <span className="username">EMPLOYE </span>
                    <i className="pi pi-fw pi-cog"/>
                </button>
                <ul className={classNames({'layout-profile-expanded': this.state.expanded})}>
                    <li><button className="p-link"><i className="pi pi-fw pi-power-off"/><span>Logout</span></button></li>
                </ul>
            </div>
        );
    }
}