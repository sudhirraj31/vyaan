import React, { Component } from "react";
import statsimg1 from "./img/stats.jpg";
import statsimg2 from "./img/stats_india.jpg";

class Stats extends Component {
  render() {
    return (
      <div className="container stats">
        <h2>
          Do you know it's lethal to live in almost all the major cities of
          India.
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img
                src={statsimg1}
                alt="statsimg1"
              />
            </div>
            <div className="col-7">
              <img
                src={statsimg2}
                alt="statsimg2"
                className ="statsimg2"
              />
            </div>
          </div>
        </div>
        <p>
          Well, that is the level of pollution in the air that we breathe today.
        </p>
      </div>
    );
  }
}

export default Stats;
