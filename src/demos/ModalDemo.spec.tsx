import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ModalDemoLayout from "./ModalDemo";
import { ModalLayout } from "../components/modal";

configure({ adapter: new Adapter() });

describe("Modal demo component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<ModalDemoLayout />);
  });

  it("should render a modal layout component", () => {
    expect(wrapper.find(ModalLayout).length).toEqual(1);
  });
});
