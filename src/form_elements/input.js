import React from "react";

const InputField = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
};
export default InputField;
