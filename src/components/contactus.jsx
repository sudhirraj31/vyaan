import React, { Component } from "react";
import Social from './social';

class Contactus extends Component {
  render() {
    return (
      <div className="container contactus">
        <p>For any questions or concerns please email us at</p>
        <Social/>
      </div>
    );
  }
}

export default Contactus;
