import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { TextField } from "./TextField";
import axios from "axios";
import { useParams, Prompt } from "react-router-dom";

function Editproduct(props) {
  const { id, pName, price, desc, manuf, quantity } = useParams();
  console.log("edit params", id, pName, price, desc, manuf, quantity);
  const validate = yup.object({
    productName: yup.string().required("Product name is required"),

    description: yup
      .string()
      .min(6, "Description shoud be min 6 char")
      .required("Description is Required"),
    manufacturer: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Manufacturer is Required"),
    price: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Price is Required"),
    quantity: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Quantity is Required"),
  });
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 d-flex justify-content-center">
        <Formik
          initialValues={{
            productName: pName,
            description: desc,
            manufacturer: manuf,
            price: price,
            quantity: quantity,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            const res = axios
              .put(`http://localhost:5000/products/${id}`, values)
              .then((res) => {
                alert("Product Updated");
                props.history.push("/home");
              })
              .catch((err) => console.log("my edit products errror", err));

            console.log("Edit procut onsubmittt", values);
          }}
        >
          {(formik) => (
            <Form style={{ paddingTop: "60px" }}>
              <Prompt
                when={
                  formik.values.productName === "" ||
                  formik.values.description === "" ||
                  formik.values.manufacturer === "" ||
                  formik.values.price === "" ||
                  formik.values.quantity === ""
                }
                message="Leave wtihout saving"
              />
              <h1 style={{ textAlign: "center" }}>Edit Product</h1>
              <TextField label="Product Name" name="productName" type="text" />
              <TextField label="Description" name="description" type="text" />
              <TextField label="Manufacturer" name="manufacturer" type="text" />
              <TextField label="Price" name="price" type="text" />
              <TextField label="quantity" name="quantity" type="text" />
              <button className="btn btn-dark" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Editproduct;
