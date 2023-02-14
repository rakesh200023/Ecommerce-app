import { useField, ErrorMessage, Formik } from "formik";
import React from "react";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div title="textfield">
      <div>
        <label
          style={{ padding: "1px", fontWeight: "bold", color: "#545454" }}
          htmlFor={field.name}
        >
          {label}
        </label>
        <input
          style={{ padding: "1px", width: "200px" }}
          className="form-control center-block"
          {...field}
          {...props}
          autoComplete="off"
        />
        <div style={{ color: "red" }}>
          <ErrorMessage name={field.name} component="div" className="error" />
        </div>
      </div>
    </div>
  );
};
