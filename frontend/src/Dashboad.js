import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "./AppTopbar";
import { AppMenu } from "./AppMenu";
import { AppProfile } from "./AppProfile";
import { Route } from "react-router-dom";
import { Dashboards } from "./components/Dashboard";
import { FormsDemo } from "./components/FormsDemo";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./layout/layout.scss";
import "./App.scss";
import { DashboardChefProjet } from "./components/DashboardChefProjet";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "light",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive,
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive,
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive,
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false,
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "MyDashboard",
        icon: "pi pi-fw pi-user ",
        command: () => {
          window.location = "/DashbordChefProjet";
        },
      },
      { label: "MyEmploye", icon: "pi pi-fw pi-home", to: "/Dashboard" },
      {
        label: "Components",
        icon: "pi pi-fw pi-globe",
        badge: "9",
        items: [
          { label: "Sample Page", icon: "pi pi-fw pi-th-large", to: "/sample" },
          { label: "Forms", icon: "pi pi-fw pi-file", to: "/forms" },
          { label: "Menus", icon: "pi pi-fw pi-plus", to: "/menus" },
        ],
      },
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    const wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive,
    });

    const sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark",
      "layout-sidebar-light": this.state.layoutColorMode === "light",
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={(el) => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <div className="layout-logo">
            <img alt="Logo" src={"assets/layout/images/logo.svg"} />
          </div>
          <AppProfile />
          <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
        </div>
        <div className="layout-main">
          <Route
            path="/dashbordChefProjet"
            exact
            component={DashboardChefProjet}
          />
          <Route path="/Dashboard" exact component={Dashboards} />
          <Route path="/forms" component={FormsDemo} />
        </div>

        <div className="layout-mask"></div>
      </div>
    );
  }
}

export default Dashboard;
