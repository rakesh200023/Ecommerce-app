import React from "react";
import { useParams } from "react-router-dom";
import "./page.css";
function Productinfo(props) {
  const { pName, price, desc, manuf, quantity } = useParams();
  //console.log(image);
  return (
    <div>
      <div className="d-flex justify-content-center container mt-5">
        <div className="card p-4 bg-white " style={{ minWidth: "400px" }}>
          <div className="about-product text-center mt-2">
            <img src={props.location.state} width="300" />
            <div style={{ paddingTop: "6px" }}>
              <h4>{pName}</h4>
              <h6 className="mt-0 text-black-50">{desc}</h6>
            </div>
          </div>
          <div className="stats mt-2">
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>Manufactured By</span>
              <span>{manuf}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>In Stock</span>
              <span>{quantity}</span>
            </div>
            <hr />
          </div>
          <div className="d-flex justify-content-between total font-weight-bold  mt-4">
            <span>Total Price</span>
            <span style={{ color: "green" }}>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
