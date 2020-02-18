class StateApi {
  constructor(data) {
    this.data = {
      articles: this.mapIntoObject(data.articles),
      authors: this.mapIntoObject(data.authors)
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {});
  }

  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  };

  getState = () => {
    return this.data;
  };
}

export default StateApi;
