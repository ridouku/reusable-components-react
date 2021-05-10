import React from "react";
import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Box, Modal } from "@material-ui/core";
import { IModalProps, ModalLayout } from "./index";

configure({ adapter: new Adapter() });

describe("Modal Layout component", () => {
  let wrapper: ShallowWrapper;
  let props: IModalProps;
  beforeEach(() => {
    props = {
      body: <div></div>,
      header: <div></div>,
      openModal: true,
      onCloseModal: jest.fn(),
    };
    wrapper = shallow(<ModalLayout {...props} />);
  });

  it("should render a modal component", () => {
    expect(wrapper.find(Modal).length).toEqual(1);
  });

  it("should render a modal component, with footer", () => {
    wrapper.setProps({
      ...props,
      footer: <Box></Box>,
    });
    expect(wrapper.find(Box).length).toEqual(1);
  });
});
