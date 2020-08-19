import React, { Component } from "react";

export default class Part1 extends Component {
  render() {
    return (
      <div className="manualPart1">
        <section className="maualPart1__header">
          <h2>Hey There!</h2>
        </section>

        <section className="form2">
          <input
            className="inputFile"
            type="file"
            name="userpic"
            id="userpic"
          />
          <label htmlFor="userpic">Select a pic</label>
          <div className="gender">
            <input type="checkbox" name="male" id="male" />
            male
            <input type="checkbox" name="female" id="female" />
            female
          </div>
        </section>

        <section className="logo">
          <h3>Asiedu.Inc</h3>
        </section>
      </div>
    );
  }
}
