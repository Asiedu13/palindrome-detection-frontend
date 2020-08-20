import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        {/* <div className="nav">
          <FontAwesomeIcon icon="bars" color="#fff" size="2x" className="nav" />
        </div> */}
        <section className="header__name">
          <h1>Palindrome Detector</h1>
        </section>
        <section className="registration">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="#">
            <h2>About</h2>
          </Link>
          <Link to="#">
            <h2>Contacts</h2>
          </Link>
          <Link to="/formoptions">
            {/* <FontAwesomeIcon
              icon="user"
              color="#fff"
              size="2x"
              className="registration__svg"
            /> */}
            <h2>SignUp</h2>
          </Link>
        </section>
      </div>
    );
  }
}
