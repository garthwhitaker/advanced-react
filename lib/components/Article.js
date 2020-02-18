import React from "react";
import PropTypes from "prop-types";

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
    <React.Fragment>
      <div style={styles.title}>{props.article.title}</div>
      <div style={styles.date}>{toDate(props.article.date)}</div>
      <a href={author.website}>
        {author.firstName} {author.lastName}
      </a>
      <div style={styles.body}>{props.article.body}</div>

      <hr />
    </React.Fragment>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  store: PropTypes.object
};
export default Article;
