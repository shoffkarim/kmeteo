import React, { Component } from "react";
import axios  from "axios";
// import { weather } from "../data.json";


// http://api.worldweatheronline.com/premium/v1/weather.ashx?key=3722e3bc2da944118e854829202411&q=Chelyabinsk,russia&num_of_days=2&tp=3&format=xml
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "lol",
    }


  }

  componentDidMount() {
    axios
    .get("http://api.worldweatheronline.com/premium/v1/weather.ashx?key=3722e3bc2da944118e854829202411&q=Chelyabinsk,russia&num_of_days=2&tp=3&format=xml", {
      "Content-Type": "application/xml; charset=utf-8"
     })
    .then(response => {
      this.setState({ data: response.data })
    })

  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome__heading">Welcome to kmeteo</h1>пше
        <p>{ this.state.data }</p>
        <p className="welcome__text">Please, choose your city</p>
        <input placeholder="choose your city"></input>
      </div>
    );
  }
};