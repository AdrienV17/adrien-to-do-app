import React from "react";
import "./footer.styles.scss";
import { socialMedia } from "../../assets/base-data";
import { css } from "aphrodite/no-important";
import { footerStyles } from "./footer.styles";

const Footer = () => {
  return (
    <div className={css(footerStyles.footer)}>
      <div className={css(footerStyles.header)}>
        <div className={css(footerStyles.headerTitle)} style={{fontFamily:'Yellowtail'}}>Adrien</div>
      </div>
      <div className={css(footerStyles.socialMedia)}>
        {socialMedia.map(({ icon, name,pageLink }, i) => (
          <div key={i} className={css(footerStyles.social)}>
            <i className={`${icon} ${css(footerStyles.i)}`}></i>
            <a  target='_blank' rel='noopener noreferrer' href={pageLink} className={css(footerStyles.a)}>{name}</a>
          </div>
        ))}
      </div>
      <div >
          <div className="copyright__text">

      © Copyright Adrien 2020 || All Rights Reserved.
          </div>
      </div>
    </div>
  );
};

export default Footer;
