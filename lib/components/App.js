import React from "react";

import ArticlesList from "./ArticlesList";

import PropTypes from "prop-types";

import AppContext from "./AppContext";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";

class App extends React.Component {
  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  filterArticles = () => {
    const { articles, searchTerm } = this.state;
    const result = {};

    if (!searchTerm) {
      return articles;
    }

    Object.keys(articles).forEach(key => {
      const { title, body } = articles[key];
      const matchedTitle = !!title.toLowerCase().match(searchTerm);
      const matchedBody = !!body.toLowerCase().match(searchTerm);
      if (matchedBody || matchedTitle) {
        result[key] = articles[key];
      }
    });

    return result;
  };
  render() {
    const articles = this.filterArticles();
    const { store } = this.props;
    return (
      <main>
        <AppContext.Provider value={store}>
          <Timestamp />
          <SearchBar />
          <ArticlesList articles={articles} />
        </AppContext.Provider>
      </main>
    );
  }
}

App.propTypes = {
  store: PropTypes.object
};
export default App;
