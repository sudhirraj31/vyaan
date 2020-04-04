import React, { Component } from "react";
import Header from "./header";


// const versions = ["Basic Version", "Powered Version"];

class Products extends Component {
  render() {
    return (
      <div className="container products">
        <Header />
        <h1>Product Featuers</h1>
        <div className="row ">
          <div className="col product-info">
            <h2>Basic Version</h2>
            <p> Description</p>
            <div className="container product-features">
              <li>Skin friendly silicone (No skin Marks)</li>
              <li>Complete seal (No leakage with polluted air)</li>
              <li>Repalcable filter at low cost (₹10)</li>
              <li>Better than N95 at affordable Price</li>
              <li>Covers optimum face area</li>
              <li>Variant colors</li>
              <li>Doesn't block vision</li>
              <li>Easy to wear specks along</li>
              <li>Strap from ears (easy to remove and wear )</li>
            </div>
          </div>
          <div className="col product-info">
            <h2>Powered Version</h2>
            <p> Description</p>
            <div className="container product-features">
              <li>Positive Air flow</li>
              <li>Can be used with different filter cartridges (voc,pm,etc)</li>
              <li>8 hours continuous performance</li>
              <li>80L/ min of clean air delivery</li>
              <li>Quick rechargeable with micoUSB</li>
              <li>No leakage of air</li>
              <li>Compact size</li>
              <li>Weighs about 100gms</li>
              <li>Aesthetically designed according to Indian face</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
