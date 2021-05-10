import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { IModalHeaderProps, ModalHeader } from "./index";

configure({ adapter: new Adapter() });

describe("Modal header component", () => {
  let wrapper: ShallowWrapper;
  let props: IModalHeaderProps;
  beforeEach(() => {
    props = {
      tittle: "Test tittle",
      highlightValue: "Test highlightValue",
      secondaryValue: "Test secondary value",
    };
    wrapper = shallow(<ModalHeader {...props} />);
  });

  it("should render a modal header component", () => {
    expect(wrapper.text().includes("Test tittle")).toBe(true);
    expect(wrapper.text().includes("Test highlightValue")).toBe(true);
    expect(wrapper.text().includes("Test secondary value")).toBe(true);
  });
});
