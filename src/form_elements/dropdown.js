import React from "react";

const DropDown = (props) => {
  return (
    <div className="mb-3">
      <label>{props.label}</label>
      <select className="form-select" aria-label="Default select example">
        <option value={props.items[0].value} text={props.items[0].text}>
          {" "}
          Male
        </option>
        <option value={props.items[1].value} text={props.items[1].text}>
          {" "}
          Female
        </option>
      </select>
    </div>
  );
};
export default DropDown;
