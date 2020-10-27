import React, { Component } from "react";
import "./contactus.css";
import Social from "./social";
import ContactForm from "./contactform";
import { MdLocationOn, MdAccessTime, MdCall, MdEmail } from "react-icons/md";

class Contactus extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row thankyou">
          <div className="col-12 align-self-center">
            <h2>Thank you for visiting us!</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="row write-us">
            <div className="col-12 col-md contactinfo">
              <h3>Contact Us</h3>
              <div className="row">
                <div className="col-12 col-md contactinfo-address">
                  <h5>
                    <MdLocationOn size="1.2em" color="#32a2a8" /> ADDRESS
                  </h5>
                </div>
                <div className="col-12 col-md hours">
                  <h5>
                    <MdAccessTime size="1.2em" color="#32a2a8" /> HOURS
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md email">
                  <h5>
                    <MdEmail size="1.2em" color="#32a2a8" /> EMAIL
                  </h5>
                </div>
                <div className="col-12 col-md phone">
                  <h5>
                    <MdCall size="1.2em" color="#32a2a8" /> PHONE
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md contactform">
              <ContactForm />
            </div>
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Contactus;
