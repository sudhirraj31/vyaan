import React, { Component } from "react";
import Social from './social';
import Stats from "./stats";
import Facts from "./facts";
import Wecare from "./wecare";
import lungs from "./img/lungs.jpg";

class HomeContent extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <Stats />
        <Facts />
        <div className="container lungs">
          <img src={lungs} alt="lungs" />
          <p>
            Slowly and steadily it is damaging our respiratory system and can
            cause many other chronic diseases.
          </p>
        </div>
        <div className="container breathing">
          <p>It’s Everyone’s Right to Breathe Clean Air</p>
        </div>
        <Wecare />
        <Social />
      </div>
    );
  }
}

export default HomeContent;
