import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import ArticlesList from "./ArticlesList";
import Article from "./Article";

configure({ adapter: new Adapter() });

describe("ArticlesList", () => {
  const props = {
    articles: { a: { id: "id" } }
  };

  Article.propTypes = {};

  it("should render", () => {
    const wrapper = shallow(<ArticlesList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
