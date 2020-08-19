import React, { Component } from "react";

export default class Part2 extends Component {
  render() {
    return (
      <div>
          <header className="manualPart2">
              <h2>Sign Up</h2>
          </header>
        <form action="post" encType="urlenconded">
          <div className="form__field">
            <label htmlFor="username">Username</label>
            <div>
              <input type="text" name="username" id="username" />
            </div>
          </div>

          {/* <div className="form__field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div> */}

          <div className="form__field">
            <label htmlFor="passwd">Password</label>
            <input type="password" name="passwd" id="passwd" />
          </div>
          <div className="form__field">
            <button type="submit">I'm in</button>
          </div>
        </form>
      </div>
    );
  }
}
