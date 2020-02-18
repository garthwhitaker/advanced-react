import React from "react";

import ArticlesList from "./ArticlesList";

import PropTypes from "prop-types";
class App extends React.Component {
  state = this.props.store.getState();

  render() {
    return (
      <ArticlesList articles={this.state.articles} store={this.props.store} />
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
export default App;
