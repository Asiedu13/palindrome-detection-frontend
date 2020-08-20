import React, { Component } from "react";
import { ManualSignUp } from "./FormComp/ManualSignUp";
import FormArt from "./FormComp/FormArt";
import { Link } from "react-router-dom";
export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      // if manual use username and passwd
      // else if google use google API
      // else if facebook use facebook API
      // else if twitter use twitter API
      // else return undefined
      type: undefined,
    };
    // Handle click and submissions here
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    // Get name attribute from event
    let { name } = event.target;
    // set it to type in state
    this.setState({ type: name });
  }

  // handle form submission
  handleSubmit() {}

  render() {
    return (
      <section className="form">
        <FormArt />
        <div className="form__title">
          <h2 className="form__title__content">Create an account</h2>
          <p className="form__title__desc">
            Sign in or Sign up to save and get access to your favourite words
          </p>
        </div>

        <section className="signOptions">
          <div className="signOptions__header">
            <h3 className="signOptions__header__content">Sign up with:</h3>
          </div>

          <div className="signOptions__optionsList">
            <div className="signOptions__optionsList__option">
              <button
                className="signOptions__optionsList__option__btn"
                id="Fb"
                name="facebook"
                onClick={this.handleClick}
              >
                Facebook
              </button>
            </div>
            <div className="signOptions__optionsList__option">
              <button
                className="signOptions__optionsList__option__btn"
                id="Gg"
                name="google"
                onClick={this.handleClick}
              >
                Google
              </button>
            </div>
              <div className="signOptions__optionsList__option">
                <Link to="/signup">
                <button
                  className="signOptions__optionsList__option__btn"
                  id="Em"
                  name="manual"
                  onClick={this.handleClick}
                >
                  Email
                </button>
            </Link>
              </div>
          </div>
        </section>

        {/* {this.state.type === "manual" ? <ManualSignUp /> : ""} */}
      </section>
    );
  }
}