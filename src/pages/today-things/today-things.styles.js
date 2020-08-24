import { flex100Vh, cardStyle, goBackButton, customTextHover, growEffect, overflowAuto } from "../../assets/globalStyles";
import { StyleSheet } from "aphrodite";

export const todayThingsStyle = StyleSheet.create({
  container: {
    ...flex100Vh,
  },
  goBackButton:{
    ...goBackButton,
    ":hover": {
      ...customTextHover.hover,
      ...growEffect.hover
    },
    ":active": {
        ...customTextHover.active,
        ...growEffect.active
      },
  },
  modalButton:{
    width:"fit-content"
  },

  card: {
    ...cardStyle,
    height:500,
    ...overflowAuto
  },
  header: {
    margin: "20px 0",
    fontSize: 50,
  },
});
