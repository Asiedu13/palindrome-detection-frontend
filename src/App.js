import React, { Component } from "react";
import Header from "./components/Header";
import WordTester from "./components/TestWord";
import Form from './components/Form';
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <WordTester /> */}
        <Form />
        <Footer />
      </div>
    );
  }
}
