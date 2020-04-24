import React, { Component } from "react";
import Social from "./social";
import Header from "./header";
import ContactForm from "./contactform";
import {MdLocationOn,MdAccessTime,MdCall,MdEmail} from "react-icons/md";
class Contactus extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="thankyou">
          <h2>Thank you for visiting us!</h2>
        </div>
        <div className="write-us">
          <div className="row">
            <div className="col contactinfo">
              <h3>Contact Us</h3>
              <div className="row">
                <div className="col contactinfo-address">
                <i class="fas fa-map-marker-alt"></i>
                  <h5><MdLocationOn size="1.2em" color="#32a2a8"/> ADDRESS</h5>
                </div>
                <div className="col hours">
                  <h5><MdAccessTime size="1.2em" color="#32a2a8"/> HOURS</h5>
                </div>
              </div>
              <div className="row">
                <div className="col email">
                  <h5><MdEmail size="1.2em" color="#32a2a8"/> EMAIL</h5>
                </div>
                <div className="col phone">
                  <h5><MdCall size="1.2em" color="#32a2a8"/> PHONE</h5>
                </div>
              </div>
            </div>
            <div className="col contactform">
              <ContactForm/>
            </div>
          </div>
        </div>
        <Social />
      </React.Fragment>
    );
  }
}

export default Contactus;
