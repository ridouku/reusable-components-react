import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MainSection } from "./main";
import { CardContent } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("main container", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<MainSection />);
  });

  it("should render a main container", () => {
    expect(wrapper.find(CardContent).length).toEqual(1);
  });
});
