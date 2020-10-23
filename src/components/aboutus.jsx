import React, { Component } from "react";
import "./aboutus.css";


class Aboutus extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center aboutus">
          <p className="text-center align-self-center p-5">
            We are a bunch of enthusiasts keenly dedicated to work on developing
            solutions for the drastic problem of air pollution. The genesis of
            our journey happened when one of us had faced chronic illness
            staying in a highly polluted city and got deeply motivated to give
            an attempt on solving this issue which the whole world is trying to
            tackle.
          </p>
        </div>
        {/* <div className="container team">
          <h1>The Team</h1>
          <p>Meet our exceptionally talented team of digital natives.</p>
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Aboutus;
