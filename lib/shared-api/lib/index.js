class StateApi {
  constructor(data) {
    this.data = {
      articles: this.mapIntoObject(data.articles),
      authors: this.mapIntoObject(data.authors),
      searchTerm: "",
      timestamp: new Date()
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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

  setSearch = searchTerm => {
    this.mergeWithState({
      searchTerm
    });
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  };

  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  mergeWithState = data => {
    this.data = { ...this.data, ...data };
    this.notifySubscribers();
  };
  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };
}

export default StateApi;
