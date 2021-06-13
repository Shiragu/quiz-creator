import React, { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Ссылка {link}</a>
        </li>
      );
    });
  }

  render() {
    const drawerClasses = [classes.drawer];

    if (!this.props.isOpen) {
      drawerClasses.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={drawerClasses.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
