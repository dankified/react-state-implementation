import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainContent from "./components/MainContent";

class Root extends Component {
  render() {
    return <MainContent />;
  }
}

render(<Root />, document.getElementById("app"));
