class DataAPI {
  constructor(data) {
    this.data = data;
  }

  mapIntoObject(arr) {
    return arr.reduce((prev, curr) => {
      prev[curr.id] = curr;
      return prev;
    }, {});
  }
  getAuthors() {
    return this.mapIntoObject(this.data.authors);
  }

  getArticles() {
    return this.mapIntoObject(this.data.articles);
  }
}

export default DataAPI;
