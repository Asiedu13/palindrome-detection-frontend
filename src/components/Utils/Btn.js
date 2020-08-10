import React, { PureComponent } from "react";

export default class Btn extends PureComponent {
  render() {
    return (
      <div className="button">
        <button> {this.props.label} </button>
      </div>
    );
  }
}
