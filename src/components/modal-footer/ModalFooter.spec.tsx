import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "@material-ui/core";
import { IModalFooterProps, ModalFooter } from "./index";
import { Save } from "react-feather";

configure({ adapter: new Adapter() });

describe("Modal footer component", () => {
  let wrapper: ShallowWrapper;
  let props: IModalFooterProps;
  beforeEach(() => {
    props = {
      primaryLabelButton: "primary test",
      primaryActionButton: jest.fn(),
    };
    wrapper = shallow(<ModalFooter {...props} />);
  });

  it("should render a modal footer component, with primary action button", () => {
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.text().includes("primary test")).toBe(true);
  });

  it("should render a modal footer component, with secondary action button", () => {
    wrapper.setProps({
      ...props,
      secondaryLabelButton: "secondary test",
      secondaryActionButton: jest.fn(),
      secondaryActionIcon: <Save size={14} />,
    });
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.text().includes("secondary test")).toBe(true);
  });
});
