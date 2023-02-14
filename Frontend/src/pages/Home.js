import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import Products from "../component/Products";
import { getProducts } from "../actions/productAction";
import { useEffect } from "react";
import { Form, Formik } from "formik";
import { TextField } from "../component/TextField";

function Home(props) {
  const [desc, setdesc] = useState(false);
  const [quan, setquan] = useState(false);
  const [loading, setLoading] = useState(false);

  const [slength, setslength] = useState(true);
  const [result, setResult] = useState([]);
  const P = props.products;
  const filterResult = (e) => {
    e.preventDefault();
    e.target.value.length > 0 ? setslength(false) : setslength(true);
    let temp = [];
    P.products.forEach((element) => {
      console.log(element.productName.includes(e.target.value));

      element.productName
        .toLowerCase()
        .includes(e.target.value.toLowerCase()) && temp.push(element);
    });
    setResult(temp);
    console.log("tete", result);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 200);
    props.getProducts();
    console.log("submitted", result);
  }, [result]);

  return (
    <div>
      {}
      <div className="d-flex justify-content-between">
        <button
          style={{ marginLeft: "10px" }}
          className="btn btn-primary"
          onClick={() => {
            props.user.isLogin
              ? props.history.push("/addproduct")
              : alert("Login Required");
          }}
        >
          Add Product
        </button>
        <input
          style={{ marginTop: "10px", width: "200px" }}
          className=" d-flex justify-content-center form-control center-block"
          placeholder="Search"
          name="search"
          onChange={(e) => filterResult(e)}
          type="text"
        />
        <>
          <div style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              name="description"
              onClick={(e) => setdesc(e.target.checked)}
            ></input>
            <label htmlFor="description"> Description</label>

            <input
              style={{ marginLeft: "10px" }}
              type="checkbox"
              name="quanttiy"
              onClick={(e) => setquan(e.target.checked)}
            ></input>
            <label htmlFor="quanttiy"> Quanttiy</label>
          </div>

          {/* {console.log("clicked check", description, quantity)} */}
        </>{" "}
      </div>
      {console.log("props prod", props.products)}
      {/* {setP(props.products)} */}
      {console.log("props proPd", P)}
      {loading ? (
        <div className=" d-flex justify-content-center">
          <ClipLoader color={"red"} loading={loading} size={50} />
        </div>
      ) : slength ? (
        <Products custom={{ desc, quan }} products={props.products.products} />
      ) : result.length > 0 ? (
        <Products custom={{ desc, quan }} products={result} />
      ) : (
        <h5
          style={{ textAlign: "center", color: "gray", fontWeight: "lighter" }}
        >
          No product found
        </h5>
      )}
    </div>
  );
}

export default connect(
  (state) => ({ user: state.user, products: state.products }),
  { getProducts }
)(Home);
