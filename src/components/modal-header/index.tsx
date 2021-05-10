/**
 * Modal Header Component
 */
import * as React from "react";
import "./ModalHeader.css";

export interface IModalHeaderProps {
  tittle: string;
  highlightValue: string;
  secondaryValue?: string;
}

export const ModalHeader: React.FC<IModalHeaderProps> = (
  props: IModalHeaderProps
) => {
  return (
    <div className="modal-header-container">
      <div className="modal-header-tittle">{props.tittle}</div>
      <div className="modal-header-highlight">{props.highlightValue}</div>
      <div className="modal-header-secondary-value">{props.secondaryValue}</div>
    </div>
  );
};
