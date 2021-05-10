/**
 * Modal Body Component
 */
import * as React from "react";
import "./ModalBody.css";
import { ReactNode } from "react";

export interface IModalBodyProps {
  children?: ReactNode;
}

export const ModalBody: React.FC<IModalBodyProps> = (
  props: IModalBodyProps
) => {
  return <div className="modal-body-container">{props.children}</div>;
};
