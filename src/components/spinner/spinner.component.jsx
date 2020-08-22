import React from 'react';
import { css } from 'aphrodite/no-important';
import { spinnerStyles } from './spinner.styles';



const Spinner = () => {
    return ( 
        // spinnerContainer
        <div className={css(spinnerStyles.spinnerContainer)}>
            {/* Loader */}
            <div className={css(spinnerStyles.loader)}></div>
            {/* Words */}
            <div className={css(spinnerStyles.words)}>Loading...</div>
        </div>
     );
}
 
export default Spinner;