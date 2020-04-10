import React, { Component } from "react";
import { Navigation } from "react-mdl";
import logo from "./img/vyaanlogo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container header">
        <div className="row">
          <div className="col-4 logo">
            <a href="/">
              <img src={logo} alt="vyaanlogo" />
            </a>
          </div>
          <div className="col-8 navigation">
            <Navigation>
              <a href="/">Home</a>
              <a href="/Products">Products</a>
              <a href="/blog">Blog</a>
              <a href="/aboutus">About Us</a>
              <a href="/contactus">Contact Us</a>
              {/* <a href="./careers">Careers</a> */}
            </Navigation>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
