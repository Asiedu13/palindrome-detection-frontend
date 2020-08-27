import React, { Component } from "react";
import MyContext from "../../../Contexts/MyContext";

export default class Part1 extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div
            className="manualPart1"
            style={
              context.signUp
                ? { background: "" }
                : { background: "linear-gradient(to right, orange, red)" }
            }
          >
            <section className="manualPart1__header">
              <h2>Hey There!</h2>
            </section>

            {context.signUp ? (
              <section className="form2">
                <input
                  className="inputFile"
                  type="file"
                  name="userpic"
                  id="userpic"
                />
                <label htmlFor="userpic">Select a pic</label>
                <div className="gender">
                  <label htmlFor="male">
                    <p> Male</p>
                    <input type="checkbox" name="male" id="male" />
                  </label>
                  <label htmlFor="female">
                    <p>Female</p>
                    <input type="checkbox" name="female" id="female" />
                  </label>
                </div>
              </section>
            ) : (
              <section>
                <p>
                  Sign In and continue from where you left of. <br /> Glad to
                  see you.
                </p>
              </section>
            )}

            <section className="logo">
              <h3>LexPriCo</h3>
            </section>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
