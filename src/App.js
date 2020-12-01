import React, { Component } from "react";
import Welcome from "./mainPage/welcome";

export default class App extends Component {



  render() {
    return (
      <div className="container">
        <Welcome city="chelyabinsk"></Welcome>

      </div>
    );
  }
}

