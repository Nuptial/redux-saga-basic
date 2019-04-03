import React from "react";
import Button from "../containers/Button";
import NewsItem from "../containers/NewsItem";
import Loading from "../containers/Loading";

const containerStyle = {
  marginTop: "10px"
};

let App = () => (
  <div className="container" style={containerStyle}>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);

export default App;
