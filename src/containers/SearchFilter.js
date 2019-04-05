import React, { Component } from "react";
import { connect } from "react-redux";
import { filterPosts } from "../actions";

class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.filterPosts = this.filterPosts.bind(this);
  }
  filterPosts(event) {
    this.props.filterPosts(event.target.value);
  }

  render() {
    return (
      <input
        className="form-control"
        placeholder="Type to filter"
        type="text"
        onChange={this.filterPosts}
      />
    );
  }
}

const mapStateToProps = state => ({
  filterText: state.filterText
});

const mapDispatchToProps = {
  filterPosts: filterPosts
};

SearchFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);

export default SearchFilter;
