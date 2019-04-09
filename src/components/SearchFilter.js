import React from "react";

let SearchFilter = ({ onChange }) => {
  return (
    <input
      className="form-control"
      placeholder="Type to filter"
      type="text"
      onChange={onChange}
    />
  );
};

export default SearchFilter;
