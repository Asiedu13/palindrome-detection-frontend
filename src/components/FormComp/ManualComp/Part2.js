import React, { Component, useContext } from "react";
import MyContext from "../../../Contexts/MyContext";

export default class Part2 extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <header className="manualPart2">
              <h2>{context.signUp ? "SignUp" : "SignIn"}</h2>
            </header>
            <form action="post" encType="urlenconded">
              <div className="form__field">
                <label htmlFor="username">Username</label>
                <div>
                  <input type="text" name="username" id="username" />
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="passwd">Password</label>
                <input type="password" name="passwd" id="passwd" />
              </div>
              <div className="form__field">
                <button
                  type="submit"
                  style={
                    context.signUp
                      ? { background: "" }
                      : {
                          background: "linear-gradient(to right, orange, red)",
                          boxShadow:
                            "2px 1px 21px 2px rgba(245, 119, 74, 0.87)",
                        }
                  }
                >
                  {context.signUp ? "I'm in" : "Let's continue" }
                  
                </button>
                <a
                  href="#"
                  onClick={context.toggleSignUp}
                  className="have-account"
                >
                  {context.signUp
                    ? "I already have an account"
                    : "I don't have an account"}
                </a>
              </div>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
