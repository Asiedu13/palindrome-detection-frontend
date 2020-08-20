import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Art1 } from "./Utils/Art";

export default class TestWord extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      hovered: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="testword">
        <form action="#" method="post">
          <div className="form__elem1">
            <label htmlFor="word">Word</label>
            <input
              type="text"
              name="word"
              id="word"
              value={this.state.word}
              onChange={this.handleChange}
              placeholder="Test a word"
            />
            <button
              id="form-btn"
              type="submit"
              onMouseOver={() => {
                this.setState({ hovered: true });
              }}
              onMouseOut={() => {
                this.setState({ hovered: false });
              }}
              onClick={this.handleClick}
            >
              {"Check "}

              {this.state.hovered ? (
                <FontAwesomeIcon icon="angle-double-right" className="move" />
              ) : null}
            </button>
          </div>
        </form>
        <Art1 />
      </div>
    );
  }
}
