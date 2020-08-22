import React from 'react';
import { css } from 'aphrodite/no-important';
import { formInputStyles as fIS } from './form-input.styles';



const FormInput = ({label,name,handleChange,...otherProps}) => {
  const formInputStyles = fIS(otherProps.value.length!==0) 
  const {styles,...propsToPass} = otherProps
  return ( 
    // Form Container
        <div className={css(formInputStyles.formInputContainer)}>
              {/* Label */}
              <label htmlFor={name} className={css(formInputStyles.labels)}>{label}</label>
              {/* Input */}
              <input className={css(formInputStyles.input,otherProps.styles)} name={name} {...propsToPass} onChange={handleChange}   />
            </div>
     );
}
 
export default FormInput;