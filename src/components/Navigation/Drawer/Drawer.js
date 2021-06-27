import React, { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={() => this.props.onClose()}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const drawerClasses = [classes.drawer];

    if (!this.props.isOpen) {
      drawerClasses.push(classes.close);
    }

    const links = [{ to: "/", label: "Список опросов", exact: true }];

    if (this.props.isAuthenticated) {
      links.push({
        to: "/quiz-creator",
        label: "Создание опроса",
        exact: false,
      });
      links.push({ to: "/logout", label: "Выйти из опросника", exact: false });
    } else {
      links.push({ to: "/auth", label: "Авторизация", exact: false });
    }

    return (
      <React.Fragment>
        <nav className={drawerClasses.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
