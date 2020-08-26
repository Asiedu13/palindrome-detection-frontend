import React, { Component } from "react";

import MyContext from "./MyContext";

export class SignUpProvider extends Component {
  state = {
    signUp: true,
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          signUp: this.state.signUp,
          toggleSignUp: () => {
            if (this.state.signUp) {
              this.setState({ signUp: false });
            } else {
              this.setState({ signUp: true });
            }
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
