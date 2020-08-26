import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/formoptions">
            <h2>SignUp</h2>
          </Link>
        </section>
      </div>
    );
  }
}
