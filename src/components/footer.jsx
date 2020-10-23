import React, { Component } from "react";
import "./footer.css";
import logo from "./img/vyaanlogo.png";

class Footers extends Component {
  render() {
    return (
      <React.Fragment>
        <hr className="bottomline" />
        <div className="container-fluid page-footer">
          <div className="row ">
            <div className="col-12 col-md-4 d-flex flex-column align-self-center text-center text-md-left">
              <a href="./aboutus">About Us</a>
              <a href="./contactus">Contact Us</a>
            </div>
            <div className="col-12 col-md-4 text-center my-3">
              <img src={logo} alt="logo2" width="30%" height="auto"/>
            </div>
            <div className="col-12 col-md-4 align-self-center text-center text-md-right">
              <h5>Contact Us</h5>
              <p>I-04, Tides, IIT Roorkee, Haridwar (UK)</p>
              <i>+91-7995981488</i>
            </div>
          </div>
          <div className="row d-flex text-center mt-3">
            <div className="col-12 col-md-10 text-md-left">
              Copyrights 2020 Vyaan. All rights reserved.
            </div>
            <div className="col-12 col-md-2 text-md-right" >
              <a href="/">Privacy policy</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footers;
