import React, { Component } from "react";
import SearchFilter from "./containers/SearchFilter";
import PostLists from "./containers/PostLists";
import Loading from "./containers/Loading";
import { getPosts } from "./actions";
import { connect } from "react-redux";

const containerStyle = {
  marginTop: "10px"
};

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="container" style={containerStyle}>
        <SearchFilter />
        <Loading />
        <PostLists />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPosts: getPosts
};

App = connect(
  null,
  mapDispatchToProps
)(App);

export default App;
