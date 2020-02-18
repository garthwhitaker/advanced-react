import React from "react";
import ArticlesList from "./ArticlesList";

import renderer from "react-test-renderer";

describe("ArticlesList", () => {
  const props = {
    articles: { a: { id: "id" } },
    store: { lookupAuthor: jest.fn(() => ({})) }
  };

  it("should render", () => {
    const tree = renderer.create(<ArticlesList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
