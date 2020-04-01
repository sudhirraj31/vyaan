import React, { Component } from "react";
import logo2 from "./img/logo2.png";

class Footers extends Component {
  render() {
    return (
      <div className="container footer">
        <div className="row">
          <div className="col-4 navlinks" style = {{textAlign: "left"}}>
            <a href="./aboutus">About Us</a>
            <a href="./Products">Products</a>
          </div>
          <div className="col-4 logo2">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="col-4 address">
            <h5>Contact Us</h5>
            <p>I-04, Tides, IIT Roorkee, Haridwar (UK)</p>
            <p>+91-7995981488</p>
          </div>
        </div>
        <div className = "row copyrights">
          <div className ="col-10" style = {{textAlign: "left"}}><a href ="/">Copyright </a>2020 Vyaan. All rights reserved.</div>
          <div className ="col-2"style = {{textAlign: "right"}}><a href ="/">Privacy policy</a></div>
        </div>
      </div>
    );
  }
}

export default Footers;
