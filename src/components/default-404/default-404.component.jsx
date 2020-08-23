import React from 'react';
import { css } from 'aphrodite/no-important';
import {default404Styles} from './default-404.styles'


const Default404 = ({title='Not Found',subtitle='Sorry, please Go back to homeapge',height=100}) => {
    return ( 
        // Container
        <div style={{height:`${height}vh`}} className={css(default404Styles.container)}>
            {/* text */}
            <div>
                {/* title */}
                <div className={css(default404Styles.title)}>{title}</div>
                {/* subtitle */}
                <span className={css(default404Styles.subtitle)}>{subtitle}</span>
            </div>
        </div>
     );
}
 
export default Default404;