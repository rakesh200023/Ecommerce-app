import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { TextField } from "./TextField";
import axios from "axios";
import { connect } from "react-redux";
import { signup } from "../actions/userAction";
import { Link, Prompt } from "react-router-dom";

function Signup(props) {
  const validate = yup.object({
    email: yup
      .string()
      .email("Must bee valid email")
      .required("email is required"),

    password: yup
      .string()
      .min(6, "password shoud be min 6 char")
      .required("password is Required"),
    firstName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("firstname is Required"),
    lastName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("lastname is Required"),
    location: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("location is Required"),
    mobileNo: yup
      .string()
      .min(10, "Must be 10 characters ")
      .required("mobileNo is Required"),
  });
  return (
    <div title="signup" className="row d-flex justify-content-center">
      <div className="col-md-6 d-flex  justify-content-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            location: "",
            mobileNo: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            // const res = axios
            //   .post("http://localhost:5000/data", values)
            //   // .then((res) => console.log("addd response", res))
            //   .catch((err) => console.log("my add errror", err));
            props.signup(values, props.history);
            console.log("signiup onsubmittt", values);
          }}
        >
          {(formik) => (
            <Form style={{ paddingTop: "60px" }}>
              <Prompt
                when={
                  formik.values.email === "" ||
                  formik.values.password === "" ||
                  formik.values.firstName === "" ||
                  formik.values.lastName === ""
                }
                message="Leave wtihout saving"
              />
              <h1 style={{ textAlign: "center" }}>Register</h1>
              <TextField label="Email" name="email" type="text" />
              <TextField label="Password" name="password" type="password" />
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="Last Name" name="lastName" type="text" />
              <TextField label="Location" name="location" type="text" />
              <TextField label="Mobile No" name="mobileNo" type="text" />
              <button className="btn btn-dark" type="submit">
                Submit
              </button>
              <p style={{ paddingTop: "20px" }}>
                Already having an account <Link to="/signin">log in</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default connect(null, { signup })(Signup);
