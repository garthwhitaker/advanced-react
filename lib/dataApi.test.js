import DataAPI from "./dataApi";
import { data } from "./testData.json";

const dataApi = new DataAPI(data);

describe("dataApi", () => {
  describe("getArticles", () => {
    it("should return articles", () => {
      const articles = dataApi.getArticles();
      const title = data.articles[0].title;
      const id = data.articles[0].id;

      expect(articles).toHaveProperty(id);
      expect(articles[id].title).toBe(title);
    });
  });
  describe("getAuthors", () => {
    it("should return authors", () => {
      const authors = dataApi.getAuthors();
    });
  });
});
