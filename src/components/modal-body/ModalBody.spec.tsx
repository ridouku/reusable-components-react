import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Box } from "@material-ui/core";
import { IModalBodyProps, ModalBody } from "./index";

configure({ adapter: new Adapter() });

describe("Modal body component", () => {
  let wrapper: ShallowWrapper;
  let props: IModalBodyProps;
  beforeEach(() => {
    props = {
      children: <Box></Box>,
    };
    wrapper = shallow(<ModalBody {...props} />);
  });

  it("should render a modal body component", () => {
    expect(wrapper.find(Box).length).toEqual(1);
  });
});
