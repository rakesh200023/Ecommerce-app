import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import { deleteProduct, getProducts } from "../actions/productAction";
import { withRouter } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ClipLoader } from "react-spinners";

function Products(props) {
  const [pic, setpic] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/images").then((res) => setpic(res.data));
  }, []);

  if (pic.length <= 0) {
    return (
      <div className=" d-flex justify-content-center mt-50">
        <ClipLoader color={"red"} loading={true} size={50} />
      </div>
    );
  }

  return (
    <div>
      {" "}
      <div className="container p-0 mt-5 mb-5">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          {props.products.map((item, i) => (
            <div className="col" key={item.id}>
              <div className="card">
                <i className="bi bi-heart-fill"></i>
                {console.log("imggg", i, pic[i].pic)}
                <LazyLoadImage
                  src={pic[i].pic}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ">
                  <h4 className="card-title  ">{item.productName}</h4>
                  <h4 className="card-text text-danger">${item.price}</h4>
                  {props.custom.desc && (
                    <h6 style={{ color: "gray" }} className="card-text">
                      {item.description}
                    </h6>
                  )}

                  <h6 className="card-text" style={{ fontWeight: "lighter" }}>
                    Manufactured by{" "}
                    <span style={{ fontWeight: "bold", color: "green" }}>
                      {" "}
                      {item.manufacturer}
                    </span>
                  </h6>
                  {props.custom.quan && (
                    <h6 className="card-text text-danger">
                      {item.quantity} left in stock
                    </h6>
                  )}
                  <hr />
                  <div
                    style={{ marginTop: "20px" }}
                    className="d-flex justify-content-evenly"
                  >
                    <i
                      className="far fa-eye"
                      onClick={() => {
                        console.log(pic[i].pic);
                        props.history.push({
                          pathname: `/productinfo/${item.productName}/${item.description}/${item.price}/${item.manufacturer}/${item.quantity}/`,
                          state: pic[i].pic,
                        });
                      }}
                    ></i>
                    <i
                      className="fas fa-pen fa-lg  "
                      onClick={() => {
                        props.user.isLogin
                          ? props.history.push(
                              `/editproduct/${item.id}/${item.productName}/${item.description}/${item.price}/${item.manufacturer}/${item.quantity}`
                            )
                          : alert("not loggged in");
                      }}
                    ></i>
                    <i
                      className="far fa-trash-alt fa-lg "
                      onClick={() => {
                        props.user.isLogin
                          ? window.confirm("Do u want to Delete?") &&
                            props.deleteProduct(item.id)
                          : alert("not loggged in");
                        props.getProducts();
                      }}
                    ></i>
                  </div>

                  {/* <button type="button" className="btn btn-outline-primary">
              Add to cart
            </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default connect((state) => ({ user: state.user }), {
  deleteProduct,
  getProducts,
})(withRouter(Products));
