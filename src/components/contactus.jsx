import React, { Component } from "react";
import Social from './social';
import Header from "./header";


class Contactus extends Component {
  render() {
    return (
      <div className="container ">
        <Header />
        <div className ="contactus">
        <p>For any questions or concerns please email us at</p>
        </div>
        <Social/>
      </div>
    );
  }
}

export default Contactus;
