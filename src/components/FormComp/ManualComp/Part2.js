import React, { Component } from "react";
import MyContext from "../../../Contexts/MyContext";

export default class Part2 extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  // Call this method when input values change
  handleChange(e) {
    const { name, value } = e.target;
    this.handleState(name, value, true);
  }
  // Handling State Change
  handleState(name, value, bool, func) {
    if (
      ((name !== undefined) & (value !== undefined) && bool === undefined) ||
      bool === true
    ) {
      this.setState({ [name]: value });
      console.log(this.state.username);
      console.log(this.state.password);
    } else if ((name !== "") & (value !== "") && bool == false) {
      this.setState((prevState) => func());
    } else {
      return new Error(
        `Incorrect parameters name: ${name}, value: ${value}, bool: ${bool}, func: ${func}`
      );
    }
  }
  // Handle Submit to server
  async handleSignUp(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      words: [],
    };
    SignUp(user);
    console.log(user);
  }
  handleSignIn() {}

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <header className="manualPart2">
              <h2>{context.signUp ? "SignUp" : "SignIn"}</h2>
            </header>
            <form
              action="post"
              onSubmit={context.signUp ? this.handleSignUp : this.handleSignIn}
            >
              <div className="form__field">
                <label htmlFor="username">Username</label>
                <div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </div>
              </div>
              <div className="form__field">
                <label htmlFor="passwd">Password</label>
                <input
                  type="password"
                  name="password"
                  id="passwd"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
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
                  // onSubmit={this.handleSubmit}
                >
                  {context.signUp ? "I'm in" : "Let's continue"}
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
// Handling state setting

// Api Calls
async function SignUp(user) {
  console.log(user);
  let response = await fetch("http://localhost:4000/api/users/include", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  console.log(result.message);
}

// async function SignIn(username, passwd) {
//   let user = {
//     username,
//     password: passwd,
//   };
// }
