import React from "react";
import { connect } from "react-redux";
import PostItem from "./PostItem";

let PostLists = ({ posts, filterText }) =>
  posts
    ? posts
        .filter(post => {
          return (
            post.title.toLowerCase().indexOf(filterText.toLowerCase()) > -1
          );
        })
        .map(post => <PostItem key={post.id} post={post} />)
    : null;

const mapStateToProps = state => ({
  posts: state.posts,
  filterText: state.filterText
});

PostLists = connect(
  mapStateToProps,
  null
)(PostLists);

export default PostLists;
