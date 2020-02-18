import React from "react";
import PropTypes from "prop-types";
import Article from "./Article";

const ArticlesList = props => {
  return (
    <React.Fragment>
      {Object.values(props.articles).map(article => {
        return <Article key={article.id} article={article} />;
      })}
    </React.Fragment>
  );
};

ArticlesList.propTypes = {
  articles: PropTypes.object
};

export default ArticlesList;
