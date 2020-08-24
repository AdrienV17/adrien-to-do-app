import { StyleSheet } from "aphrodite";
import {
  customTextHover,
  flex100Vh,
  goBackButton,
  growEffect,
} from "../../assets/globalStyles";

export const homepageStyles = StyleSheet.create({
  homepageContainer: {
    ...flex100Vh,
    flexDirection: "column",
  },
  signButton: {
    ...goBackButton,

    ":hover": {
      ...customTextHover.hover,
      ...growEffect.hover,
    },
    ":active": {
        ...customTextHover.active,
        ...growEffect.active,
      },
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    margin: "30px 0px",
  },
  i: {
    fontSize: 300,
  },
  text: {
    fontSize: 25,
  },
  li: {
    transition: "0.3s",
    cursor: "pointer",
    ":hover": {
      ...customTextHover.hover,
      ...growEffect.hover,
    },
    ":active": {
        ...customTextHover.active,
        ...growEffect.active,
      },
  },

});
