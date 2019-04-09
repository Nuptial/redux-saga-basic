import React, { Component } from "react";
import PostLists from "./components/PostLists";
import Loading from "./components/Loading";
import { getPosts, getMorePosts } from "./actions";
import { connect } from "react-redux";

const containerStyle = {
  marginTop: "10px"
};

class App extends Component {
  componentDidMount() {
    this.props.getPosts();

    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.getMorePosts();
    }
  };

  render() {
    return (
      <div className="container" style={containerStyle}>
        <PostLists />
        <Loading />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getPosts: getPosts,
  getMorePosts: getMorePosts
};

App = connect(
  null,
  mapDispatchToProps
)(App);

export default App;
