import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav">
          <FontAwesomeIcon icon="bars" color="#fff" size="2x" className="nav" />
        </div>
        <section className="header__name">
          <h1>Palindrome Detector</h1>
        </section>
        <section className="registration">
          <FontAwesomeIcon
            icon="user"
            color="#fff"
            size="2x"
            className="registration__svg"
          />
        </section>
      </div>
    );
  }
}
