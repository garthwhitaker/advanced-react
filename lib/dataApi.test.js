import StateApi from "shared-api/lib";
import { data } from "./testData.json";

const store = new StateApi(data);

describe("dataApi", () => {
  describe("getArticles", () => {
    it("should return articles", () => {
      const { articles } = store.getState();
      const title = data.articles[0].title;
      const id = data.articles[0].id;

      expect(articles).toHaveProperty(id);
      expect(articles[id].title).toBe(title);
    });
  });
  describe("getAuthors", () => {
    it("should return authors", () => {
      const { authors } = store.getState();
      const { firstName, lastName, id } = data.authors[0];

      expect(authors).toHaveProperty(id);
      expect(authors[id].firstName).toBe(firstName);
      expect(authors[id].lastName).toBe(lastName);
    });
  });
});
