import React, { Component } from "react";
import Btn from "./Utils/Btn";
export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <form action="#" method="post">
          <div className="form__elem1">
            <label htmlFor="word">Word</label>
            <input
              type="text"
              name="word"
              id="word"
              placeholder="Test a word"
            />
            <Btn label="Check" />
          </div>
        </form>
      </div>
    );
  }
}
