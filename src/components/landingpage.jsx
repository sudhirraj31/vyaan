import React, { Component } from "react";
import "./landingpage.css";
import Titles from "./titles";
import Header from "./header";
import gif from "./img/basic.gif";
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
        <div id="scrolldown" className="content">
          <Stats />
          <Facts />
          <div className="container lungs">
            <img src={lungs} alt="lungs" />
            <p>
              Slowly and steadily it damages the respiratory system leading to many chronic ailments like asthma and Chronic Obstructive Pulmonary Diseases (COPD).  </p>
          </div>
          <div className="container-fluid breathing">
            <h1>It’s Everyone’s Right to Breathe Clean Air</h1>
          </div>
          <Wecare />
          
          {/* <div className="home-product-link">
              <div className="row" >
                <div className="col-4 home-mask-gif">
                  <a href="/"><img src={gif} alt="mask"/></a>
                </div>
                <div className="col-8 explore-products">
                <a href="/">Explore Our Products</a>
                </div>
              </div>
          </div> */}
          <Social/>
        </div>
      </div>
    );
  }
}

export default Landingpage;
