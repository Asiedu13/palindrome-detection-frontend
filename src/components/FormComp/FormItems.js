import React, { Component } from "react";

export default class FormItems extends Component {
  render() {
    return (
      <div>
        
        <form action="post" encType="urlenconded">
          <div className="form__field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>

          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="form__field">
            <label htmlFor="passwd">Password</label>
            <input type="text" name="passwd" id="passwd" />
          </div>
          <div className="form__field">
            <button type="submit">I'm in</button>
          </div>
        </form>
      </div>
    );
  }
}
