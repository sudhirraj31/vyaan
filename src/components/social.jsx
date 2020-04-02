import React, { Component } from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

class Social extends Component {
  render() {
    return (
      <div className="container social">
        <div className="social-title">Connect with us on</div>
        <a href="https://www.linkedin.com/in/vyaan-purifiers-348341194/ " target="_blank" rel="noopener noreferrer" className="linkedin social">
          <FaLinkedin size="3.5em" />
        </a>
        <a href="https://twitter.com/vyaan_life" target = "_blank" rel="noopener noreferrer" className="twitter social">
          <FaTwitterSquare size="3.5em" />
        </a>
      </div>
    );
  }
}

export default Social;
