import React, { Component } from "react";
import FirstPart from "./ManualComp/Part1";
import SecondPart from "./ManualComp/Part2";
export class ManualSignUp extends Component {
  render() {
    return (
      <div className="manualSignUp">
        <FirstPart />
        <SecondPart />
      </div>
    );
  }
}
