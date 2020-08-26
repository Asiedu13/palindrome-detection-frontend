import React, { Component } from "react";
import FirstPart from "./ManualComp/Part1";
import SecondPart from "./ManualComp/Part2";
import { SignUpProvider } from "../../Contexts/SignUpProvider";
export class ManualSignUp extends Component {
  render() {
    return (
      <div className="manualSignUp">
        <SignUpProvider>
          <FirstPart />
          <SecondPart />
        </SignUpProvider>
      </div>
    );
  }
}
