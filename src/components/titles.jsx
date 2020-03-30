import React, { Component } from "react";

class Titles extends Component {
  render() {
    return (
      <div className="container titles">
        <h1>
          <span
            id="titlesfirst"
            style={({ fontSize: "70px" }, { color: "#b30000" })}
          >
            92%
          </span>{" "}
          of people <span style={{ color: "#003399" }}>Worlwide</span> do not
          breath <br></br>
          <span style={{ fontWeight: "bold" }}>Safe Air</span>
        </h1>
        <p>It’s highly possible you are also one of them</p>
        <a href="#scrolldown" class="btn btn-info" role="button">
          Tell me more
        </a>
      </div>
    );
  }
}

export default Titles;
