import React, { Component } from "react";
import FormItem from "./FormComp/FormItems";
import FormArt from "./FormComp/FormArt";

export default class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      // if manual use username and passwd
      // else if google use google API
      // else if facebook use facebook API
      // else if twitter use twitter API
      // else return undefined
      type: "manual",
    };
   
  }
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
            <h3 className="signOptions__header__content">Sign in with:</h3>
          </div>

          <div className="signOptions__optionsList">
            <div className="signOptions__optionsList__option">
              <button
                className="signOptions__optionsList__option__btn"
                id="Fb"
                name="facebook"
              >
                Facebook
              </button>
            </div>
            <div className="signOptions__optionsList__option">
              <button
                className="signOptions__optionsList__option__btn"
                id="Gg"
                name="google"
              >
                Google
              </button>
            </div>
            <div className="signOptions__optionsList__option">
              <button
                className="signOptions__optionsList__option__btn"
                id="Em"
                name="manual"
              >
                Email
              </button>
            </div>
          </div>
        </section>

        {/* {<FormItem />} */}
      </section>
    );
  }
}
