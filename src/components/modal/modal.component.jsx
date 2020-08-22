import React, { useState, cloneElement, isValidElement } from "react";
import { css } from "aphrodite/no-important";
import { modalStyles } from "./modal.styles";
import ModalContainer from "./subcomponents/modal-container.subcomponent";

const Modal = ({ children, trigger, visible = false, ...otherProps }) => {
  const [isVisible, setIsVisible] = useState(visible);
  //   Passing SetIsVisible Prop
  const childrenComponent = isValidElement(children)
    ? cloneElement(children, { setIsVisible })
    : children;

  return (
    // Modal
    <div>
      {/* Trigger element */}
      <div
        className={css(modalStyles.trigger)}
        onClick={() => setIsVisible(true)}
      >
        {trigger}
      </div>
      {
        isVisible?
        <ModalContainer childrenComponent={childrenComponent} setIsVisible={setIsVisible}/>:null
      }
    </div>
  );
};

export default Modal;
