import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userLogout } from "../actions/userAction";
import "../App.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link title="brand-test" className="navbar-brand" to="/home">
          Product Inventory
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          style={{ marginRight: "40px" }}
          id="basicExampleNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/chart">
                Most Viewed
              </Link>
            </li>
            {!props.user.isLogin ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    Sign in
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li style={{ color: "white" }} className="nav-item">
                  <Link className="nav-link" to="/profile">
                    {props.user.user.firstName}
                  </Link>
                </li>
                <li style={{ color: "white" }} className="nav-item">
                  <button
                    style={{ margin: "0px", padding: "5px" }}
                    className="nav-link btn btn-danger"
                    onClick={() => {
                      props.userLogout();
                      props.history.push("/home");
                      console.log("logging out");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
const MapStateToprops = (state) => ({
  user: state.user,
});

export default connect(MapStateToprops, { userLogout })(withRouter(Navbar));
