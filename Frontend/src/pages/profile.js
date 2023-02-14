import React from "react";
import { connect } from "react-redux";

function profile(props) {
  return (
    <div>
      <div className="d-flex justify-content-center container mt-5">
        <div className="card p-4 bg-white " style={{ minWidth: "400px" }}>
          <i className="fa fa-apple"></i>
          <div className="about-product text-center mt-2">
            <div>
              <h4>{props.user.user.firstName}</h4>
              <h6 className="mt-0 text-black-50">{props.user.user.email}</h6>
            </div>
          </div>
          <div className="stats mt-2">
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>First Name</span>
              <span>{props.user.user.firstName}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>Last Name</span>
              <span>{props.user.user.lastName}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>Mobile No</span>
              <span>{props.user.user.mobileNo}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-price">
              <span style={{ fontWeight: "bold" }}>Location</span>
              <span>{props.user.user.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const MapStateToprops = (state) => ({
  user: state.user,
});
export default connect(MapStateToprops, null)(profile);
