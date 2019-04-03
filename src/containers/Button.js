import React from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

const buttonStyle = {
  width: "100%"
};

let Button = ({ getNews }) => (
  <button onClick={getNews} style={buttonStyle}>
    {" "}
    Press to see news{" "}
  </button>
);

const mapDispatchToProps = {
  getNews: getNews
};

Button = connect(
  null,
  mapDispatchToProps
)(Button);

export default Button;
