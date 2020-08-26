import React, { Component } from "react";
import MyContext from "../../../Contexts/MyContext";

export default class Part1 extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="manualPart1" style={context.signUp ? {background: ""}: {background: "linear-gradient(to right, orange, red)"} }>
            <section className="maualPart1__header">
              <h2>Hey There!</h2>
            </section>

             {context.signUp ? <section className="form2">
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
              :
            <section>
              <p>
                Sign In and continue from where you left of. <br /> Glad to see
                you.
              </p>
            </section>

            }

            <section className="logo">
              <h3>LexPriCo</h3>
            </section>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
