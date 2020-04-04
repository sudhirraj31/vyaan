import React, { Component } from "react";
import Titles from "./titles";
import Header from "./header";

import Social from './social';
import Stats from "./stats";
import Facts from "./facts";
import Wecare from "./wecare";
import lungs from "./img/lungs.jpg";

class Landingpage extends Component {
  render() {
    return (
      <div className = "home">
        <div className="container-fluid landingpage">
          <Header />
          <Titles />
        </div>
        <div id="scrolldown" className="container-fluid content">
          <Stats />
          <Facts />
          <div className="container lungs">
            <img src={lungs} alt="lungs" />
            <p>
              Slowly and steadily it damages the respiratory system leading to many chronic ailments like asthma and Chronic Obstructive Pulmonary Diseases (COPD).  </p>
          </div>
          <div className="container breathing">
            <h1>It’s Everyone’s Right to Breathe Clean Air</h1>
          </div>
          <Wecare />
          <Social/>
        </div>
      </div>
    );
  }
}

export default Landingpage;
