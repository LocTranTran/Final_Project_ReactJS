import React from "react";
const Radio = ({ value, label, checked, onChange }) => {
  return (
    <div>
      <label className="d-flex align-items-center ">
        <input
          style ={{width:'50px',height:'20px'}}
          type="radio"
          name="radio"
          // checked={checked}
          value={value}
          onChange={onChange}
        />
        <span style={{}}> {label}</span>
      </label>
    </div>
  );
};
export default Radio;
