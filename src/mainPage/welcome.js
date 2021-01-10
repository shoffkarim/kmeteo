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
      xml: "kek",
      value: ""
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  getData(event){
    axios
    .get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=3722e3bc2da944118e854829202411&q=${ this.state.value },russia&num_of_days=2&tp=3&format=xml`, {
      "Content-Type": "application/xml; charset=utf-8"
     })
    .then(response => {
      this.setState({ data: response.data })
      var parser = new xml2js.Parser();
      parser.parseString(this.state.data, (err, result) => this.setState({ xml: JSON.stringify(result) }));
    })
    console.log(this.state.xml)
    event.preventDefault();

  }


  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome__heading">Welcome to kmeteo</h1>пше
        <p>{ this.state.xml }</p>
        <p className="welcome__text">Please, choose your city</p>
        <form onSubmit={this.getData}>
          <input type="text" className="choose-city" value={ this.state.value } onChange={ this.handleChange }></input>
          <button>click me</button>
        </form>
      </div>
    );
  }
};