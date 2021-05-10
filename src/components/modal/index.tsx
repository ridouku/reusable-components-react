/**
 * Modal Layout Component
 */
import React from "react";
import { Box, Modal, StylesProvider } from "@material-ui/core";
import "./ModalLayout.css";
import { X } from "react-feather";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

export interface IModalProps {
  header: JSX.Element;
  body: JSX.Element;
  footer?: JSX.Element;
  openModal: boolean;
  onCloseModal(): void;
  backdrop?: boolean;
  overlay?: boolean;
  transition?: "left" | "right" | "up" | "down";
}

const useStyles = makeStyles(() => ({
  boxBackground: {
    background: "#F7FAFC",
  },
}));

export const ModalLayout: React.FC<IModalProps> = (props: IModalProps) => {
  const classes = useStyles();

  return (
    <StylesProvider injectFirst={true}>
      <Modal
        open={props.openModal}
        onClose={props.onCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-main-container"
        BackdropProps={{ invisible: !props.overlay }}
        hideBackdrop={props.backdrop}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        <Slide
          direction={props.transition}
          timeout={340}
          in={props.openModal}
          mountOnEnter
          unmountOnExit
        >
          <div className="modal-cover">
            <div className="modal-close-icon" onClick={props.onCloseModal}>
              <X size={20} />
            </div>
            <div>{props.header}</div>
            <div className="modal-context-body">{props.body}</div>
            {props.footer ? (
              props.footer
            ) : (
              <div className={classes.boxBackground}>
                <Box marginBottom={1} />
              </div>
            )}
          </div>
        </Slide>
      </Modal>
    </StylesProvider>
  );
};
