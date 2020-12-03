import React, { Component } from "react";
import axios  from "axios";
var xml2js = require("xml2js");
// import { weather } from "../data.json";


// http://api.worldweatheronline.com/premium/v1/weather.ashx?key=3722e3bc2da944118e854829202411&q=Chelyabinsk,russia&num_of_days=2&tp=3&format=xml
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "lol",
      xml: "kek"
    }

    this.getData = this.getData.bind(this);
  }

  getData(){
    axios
    .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=3722e3bc2da944118e854829202411&q=${ this.props.city },russia&num_of_days=2&tp=3&format=xml`, {
      "Content-Type": "application/xml; charset=utf-8"
     })
    .then(response => {
      this.setState({ data: response.data })
      var parser = new xml2js.Parser();
      parser.parseString(this.state.data, (err, result) => this.setState({ xml: JSON.stringify(result) }));
    })

  }

  // componentDidMount() {


  // }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome__heading">Welcome to kmeteo</h1>пше
        <p>{ this.state.xml }</p>
        <p className="welcome__text">Please, choose your city</p>
        <input type="text" className="choose-city"></input>
        <button onClick={this.getData}>click me</button>
      </div>
    );
  }
};