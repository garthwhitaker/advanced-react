import React from "react";
import PropTypes from "prop-types";

import storeProvider from "./storeProvider";
const styles = {
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  date: {
    fontSize: 11,
    color: "#c1c1c1"
  },
  body: {
    padding: 5
  }
};

const toDate = date => new Date(date).toDateString();
const Article = props => {
  const author = props.store.lookupAuthor(props.article.authorId);
  return (
    <article>
      <div style={styles.title}>{props.article.title}</div>
      <div style={styles.date}>{toDate(props.article.date)}</div>
      <a href={author.website}>
        {author.firstName} {author.lastName}
      </a>
      <div style={styles.body}>{props.article.body}</div>
      <hr />
    </article>
  );
};

const extraProps = (store, initialProps) => {
  return { author: store.lookupAuthor(initialProps.article.authorId) };
};

Article.propTypes = {
  article: PropTypes.shape({
    authorId: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  store: PropTypes.object.isRequired
};

export default storeProvider(extraProps)(Article);
