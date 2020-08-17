import React, { Component } from "react";
import Header from "./components/Header";
import WordTester from "./components/TestWord";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WordTester />
        <Footer />
      </div>
    );
  }
}
