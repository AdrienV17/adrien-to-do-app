import { StyleSheet } from "aphrodite";

export const footerStyles = StyleSheet.create({
  //.footer
  footer: {
    height: "50vh",
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  },
  //.footer .footer__header
  header: {
    fontFamily: "'Yellowtail'",
  },
  //.footer .footer__header .header__title
  headerTitle: {
    fontSize: "150px",
    '@media (max-width:600px)':{
        fontSize:90
    }
  },
  //.footer .footer__social-media
  socialMedia: {
    position: "relative",
    top: "-20px",
  },
  //.footer .footer__social-media .social-media__social
  social: {
    display: "inline-block",
    borderRight: "2px solid white",
    padding: "0 20px",
    fontSize: "30px",
    fontWeight: "bold",
    transition: "0.3s",
    //.footer .footer__social-media .social-media__social:hover
    ":hover": {
      color: "#af2b2b",
    },
    ":last-child": {
      borderRight: "none",
    },
  },
  //.footer .footer__social-media .social-media__social i, .footer .footer__social-media .social-media__social a
  i: {
    marginRight: "10px",
    display: "inline-block",
  },
  a: {
    display: "inline-block",
  },
  //.footer .footer__social-media .social-media__social:last-child
});
