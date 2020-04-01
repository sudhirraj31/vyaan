import React, { Component } from "react";
import wecareimg1 from "./img/left.jpg";
import wecareimg2 from "./img/right.jpg";

class Wecare extends Component {
  render() {
    return (
      <div className="container wecare">
        <div className="row">
          <div className="col-3 ">
            <img src={wecareimg1} alt="wecareimg1" height="330px" width="17%" />
          </div>
          <div className="container col-6 wemsg" >
              We at VYAAN care for your health and this planet. We are working
              on various technology to reduce the Pollution at source itself. But
              to address the immediate adversity we have developed a portable
              powered respirator that ensures you breathe pure air even in the most polluted environment.
          </div>
          <div className="col-3 ">
            <img src={wecareimg2} alt="wecareimg2" height="330px" width="17%" />
          </div>
        </div>
      </div>
    );
  }
}

export default Wecare;
