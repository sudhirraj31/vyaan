import React, { Component } from "react";
import "./product.css";
import Header from "./header";
import gif from "./img/basic.gif";
import airflow from "./img/airflow.png";
import silicone from "./img/silicone.png";
import filter from "./img/filter.png";
import filterring from "./img/ring.jpg";


class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid basicgif">
          <img src={gif} alt="loading" />
        </div>
        <div className="container products-title">
          <h1>Basic Version</h1>
          <p>
            Stay healthy and breathe clean air with Vyaan N99 mask. Designed for
            superior particle and other pollutant filtration technology.
          </p>
          <h2>Product Features</h2>
        </div>
        <div className="container features">
          <div className="row ">
            <div className="col airflow-content">
              <h3 style={{ color: "#2D9CDB" ,borderBottom:"1px solid #2D9CDB"}}>
                Smooth and Efficient Air Flow
              </h3>
              <p>Compact and Stylish</p>
              <p>Comfortable Fit with Unhindered Field of View</p>
            </div>
            <div className="col airflow">
              <img src={airflow} alt="mask"  />
            </div>
          </div>
          <div className="row ">
            <div className="col silicone">
              <img src={silicone} alt="mask" />
            </div>
            <div className="col silicone-content">
              <h3 style={{ color: "#219653" ,borderBottom:"1px solid #219653"}}>Food Grade Silicone</h3>
              <p>Perfectly seals different face types</p>
              <p>Skin Friendly material </p>
              <p>Doesn’t cause Rashes and prevents infection</p>
            </div>
          </div>
          <h3 style={{ textAlign: "center", color: "#2D9CDB",margin:"2em 1em" ,borderBottom:"1px solid #2D9CDB"}}>
            Easier to Breathe – Minimal Pressure Drop
          </h3>
          <div className="row aboutfilter">
            <div className="col-3 filter">
              <img src={filter} alt="filter" />
              <h5>Filter</h5>
            </div>
            <div className="col-6 filter-content">
              <p>Comes with special Nano-Fiber Coating</p>
              <p>Material Produced through Electrospinning</p>
              <p>Lower Filter Replacement Cost</p>
            </div>
            <div className="col-3 filterring">
              <img src={filterring} alt="ring" />
              <h5>Filter Ring</h5>
            </div>
          </div>

          {/* <h3 style={{ textAlign: "center", color: "#004871",margin:"2em",fontWeight:"700" }}>
          Available in Variant Colors
          </h3> */}
        </div>
        </React.Fragment>
    );
  }
}

export default Products;
