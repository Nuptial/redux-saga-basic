import * as React from "react";

const SearchFilter = props => {
  const { onChange } = props;

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
