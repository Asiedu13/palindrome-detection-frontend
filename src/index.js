import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/Header";
import FormOptions from "./components/FormOptions";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faAngleDoubleRight,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { ManualSignUp } from "./components/FormComp/ManualSignUp";
library.add(
  fab,
  faCheckSquare,
  faFacebook,
  faCoffee,
  faAngleDoubleRight,
  faUser,
  faBars
);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/formoptions" component={FormOptions} />
        <Route path="/signup" component={ManualSignUp} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
