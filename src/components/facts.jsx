import React, { Component } from "react";
import "./facts.css";
import factsimg from "./img/facts.jpg";

class Facts extends Component {
  render() {
    return (
      <div className="container facts">
        <div className="row">
          <div className="col">
            <img src={factsimg} alt="factsimg" />
          </div>
          <div className="col">
            <h4>
              <span style={{ color: "#b3003b",fontSize:"1.1em" }}>
                SMOKING 20 CIGARETTES
              </span>{" "}
              a <span style={{ fontWeight: "bold" }}>day</span> just breathing
              in the city like <span style={{ fontWeight: "bold" }}>Delhi</span>
              .
            </h4>
          </div>
        </div>
        <p>
          Worst part is we do not directly feel or see the damage caused and
          thus do not take it seriously.
        </p>
      </div>
    );
  }
}

export default Facts;
