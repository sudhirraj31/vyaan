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
        <div className="container statsimg">
          <img src={statsimg1} alt="image" className="statsimg1" />
          <img src={statsimg2} alt="image" className="statsimg2" />
        </div>
        <p>
          Well, that is the level of pollution in the air that we breathe today.
        </p>
      </div>
    );
  }
}

export default Stats;
