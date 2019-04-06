import React from "react";

let PostItem = ({ post }) => (
  <div className="card m-2">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
    </div>
  </div>
);

export default PostItem;
