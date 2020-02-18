import React from "react";

import ArticlesList from "./ArticlesList";

import PropTypes from "prop-types";

import AppContext from "./AppContext";

class App extends React.Component {
  state = this.props.store.getState();

  render() {
    return (
      <AppContext.Provider value={this.props.store}>
        <ArticlesList articles={this.state.articles} store={this.props.store} />
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
export default App;
