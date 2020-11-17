import React, { Component } from "react";

export default class Welcome extends Component {

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome__heading">Welcome to kmeteo</h1>
        <p className="welcome__text">Please, choose your city</p>
      </div>
    );
  }
};