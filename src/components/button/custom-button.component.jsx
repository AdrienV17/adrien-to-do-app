import React from "react";
import "./custom-button.styles.scss";
import { Link } from "react-router-dom";
import { css } from "aphrodite/no-important";
import { customButtonStyles } from "./custom-button.styles";

const Button = ({ inverted = false, children, isLink,to='', ...otherProps }) => {
  return isLink ? (
    // react-router link
  <Link {...otherProps} to={to} className={css(customButtonStyles.customButton)}>{children}</Link>
  ) : (
    // Custom button
  <button {...otherProps}  className={css(customButtonStyles.customButton)}>{children}</button>
  );
};

export default Button;
