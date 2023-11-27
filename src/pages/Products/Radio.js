import React from "react";
const Radio = ({ value, label, checked, onChange }) => {
  return (
    <div>
      <label className="col-12 d-flex align-items-center justify-content-around  ">
        <span style={{ width: "150px" ,height:'30px'}}> {label}</span>
        <input
          type="radio"
          name="radio"
          checked={checked}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
export default Radio;
