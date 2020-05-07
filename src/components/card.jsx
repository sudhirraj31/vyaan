import React, { Component } from "react";
import "./card.css";
import img from "./img/sudhir.jpg";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={img} alt="profile" />
        <div className="card-body">
          <div className ="row">
            <div className="col"><h5 className="card-title">Card title</h5></div>
            <div className="col"><p className="card-text">Description</p></div>
          </div>
          <div className ="sociallinks">
          <a
            href="https://www.linkedin.com/in/vyaan-purifiers-348341194/ "
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin size="2.5em" style={{color:"#0e76a8"}}/>
          </a>
          <a
            href="https://twitter.com/vyaan_life"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <FaTwitterSquare size="2.5em" style={{color:"#00acee"}} />
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
