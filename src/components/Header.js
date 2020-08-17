import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Header extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log(`I am working at ${event.target}`);
  }
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
