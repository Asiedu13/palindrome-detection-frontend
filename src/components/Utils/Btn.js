import React, { PureComponent } from "react";

export default class Btn extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      hovered: false,
    };
  }

  render() {
    return (
      <div id="button">
        <button onClick={this.props.click} >
          {this.props.label}
        </button>
      </div>
    );
  }
}
