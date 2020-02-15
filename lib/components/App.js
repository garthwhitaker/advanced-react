import React from "react";

import DataAPI from "shared-api/lib";
import ArticlesList from "./ArticlesList";

class App extends React.Component {
  state = {
    articles: {},
    authors: {}
  };

  async componentDidMount() {
    const response = await fetch("/data");
    const result = await response.json();

    const api = new DataAPI(result);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

  articleActions = {
    lookupAuthor: authorId => {
      return this.state.authors[authorId];
    }
  };
  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
export default App;
