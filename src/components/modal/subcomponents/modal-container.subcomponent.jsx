import React from 'react';
import { useSpring,animated } from 'react-spring';
import { fadeInSpring } from '../../../assets/springs';
import { css } from 'aphrodite';
import { modalContainerSubStyles } from './modal-container.substyles';



const ModalContainer = ({setIsVisible,childrenComponent}) => {
    const fadeIn= useSpring(fadeInSpring)

    return (  
        // Modal Container
      <div className={css(modalContainerSubStyles.modalContainer)}>
      {/* Modal Card */}
      <animated.div style={fadeIn} className={css(modalContainerSubStyles.modalCard)}>
        {/* Close Button */}
        <div
          onClick={() => setIsVisible(false)}
          className={css(modalContainerSubStyles.closeButton)}
        >
          Close
        </div>
        {/* Modal Content */}
        <div>{childrenComponent}</div>
      </animated.div>
    </div>
    );
}
 
export default ModalContainer;