import React, { Component } from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import SearchFilter from "./SearchFilter";

class PostLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: ""
    };
  }

  handleChange = event => {
    this.setState({
      filterText: event.target.value
    });
  };

  render() {
    return (
      <div>
        <SearchFilter onChange={this.handleChange} />{" "}
        {this.props.posts
          ? this.props.posts
              .filter(
                post =>
                  post.title
                    .toLowerCase()
                    .indexOf(this.state.filterText.toLowerCase()) > -1 ||
                  post.body
                    .toLowerCase()
                    .indexOf(this.state.filterText.toLowerCase()) > -1
              )
              .map((post, index) => <PostItem key={index} post={post} />)
          : null}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

PostLists = connect(
  mapStateToProps,
  null
)(PostLists);

export default PostLists;
