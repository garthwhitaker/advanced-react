import React from "react";

import DataAPI from "../dataApi";

import { data } from "../testData.json";
import ArticlesList from "./ArticlesList";

const api = new DataAPI(data);
class App extends React.Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };
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
