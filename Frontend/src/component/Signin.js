import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { TextField } from "./TextField";
import axios from "axios";
import { connect } from "react-redux";
import { userLogin } from "../actions/userAction";
import { Link, Prompt } from "react-router-dom";

function Signin(props) {
  const validate = yup.object({
    email: yup
      .string()
      .email("Must bee valid email")
      .required("email is required"),

    password: yup
      .string()
      .min(6, "password shoud be min 6 char")
      .required("Required"),
  });
  return (
    <div title="login" className="row d-flex justify-content-center">
      <div className="col-md-6 d-flex justify-content-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validate}
          onSubmit={async (values) => {
            // const res = await axios
            //   .get(`http://localhost:5000/data?email=${values.email}`)
            //   // .then((res) => console.log("resdsf", res))
            //   .catch((err) => console.log("err", err));
            // console.log(values);
            // console.log("res", res.data);
            // console.log(res.data[0].password, values.password);
            // if (res.data[0].password === values.password) {
            //   alert("logged in");
            // } else {
            //   alert("invalid password");
            // }
            await props.userLogin(values, props.history);
            console.log("mig", props.user);
            // props.history.push("/home");
            // props.user.isLogin
            //   ? props.history.push("/home")
            //   : console.log("stay");
            console.log("mig 22", props);
          }}
        >
          {(formik) => (
            <Form style={{ paddingTop: "60px" }}>
              <Prompt
                when={
                  formik.values.email === "" || formik.values.password === ""
                }
                message="Leave wtihout saving"
              />
              <h1 style={{ textAlign: "center" }}>Login</h1>
              <TextField label="Email" name="email" type="text" />
              <TextField label="Password" name="password" type="password" />
              <button className="btn btn-dark" type="submit">
                Submit
              </button>
              <p style={{ paddingTop: "20px" }}>
                Create a new account <Link to="/signup">sign up</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default connect((state) => ({ user: state.user }), { userLogin })(
  Signin
);
