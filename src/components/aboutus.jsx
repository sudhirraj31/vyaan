import React, { Component } from "react";
import Header from "./header";

class Aboutus extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="container aboutus">
          <p>
            We are a bunch of enthusiasts keenly dedicated to work on developing
            solutions for the drastic problem of air pollution. The genesis of
            our journey happened when one of us had faced chronic illness
            staying in a highly polluted city and got deeply motivated to give
            an attempt on solving this issue which the whole world is trying to
            tackle.
          </p>
        </div>
      </div>
    );
  }
}

export default Aboutus;
