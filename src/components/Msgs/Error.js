import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../Utils/Btn";
import MyContext from "../../Contexts/MyContext";
export default function Error(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="form-error">
          <section className="form-error__header">
            <div className="closeIcon">
              <FontAwesomeIcon icon="cross" />
            </div>
            <div className="error__content">
              <p>Sorry! Couldn't create user</p>
            </div>
          </section>

          <section className="form-error__options">
            <Btn label="retry" click={context.signUp ? props.click(true): props.click(false)} />
          </section>
        </div>
      )}
    </MyContext.Consumer>
  );
}
