import React from "react";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import storeProvider from "./storeProvider";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  doSearch = debounce(() => {
    this.props.store.setSearch(this.state.searchTerm);
  }, 300);

  onChange = event => {
    this.setState(
      {
        searchTerm: event.target.value
      },
      () => {
        this.doSearch();
      }
    );
  };
  render() {
    return (
      <React.Fragment>
        <input
          type="search"
          placeholder="Search articles"
          onChange={this.onChange}
          value={this.state.searchTerm}
        />
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  store: PropTypes.object.isRequired
};
export default storeProvider()(SearchBar);
