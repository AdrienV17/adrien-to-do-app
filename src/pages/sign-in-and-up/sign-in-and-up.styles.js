import { StyleSheet } from "aphrodite";
import { cardStyle, flex100Vh, hideScrollbar } from "../../assets/globalStyles";

export const signInAndUpStyles = StyleSheet.create({
  signInAndUp: {
   ...flex100Vh,
   overflow: 'auto',
    ...hideScrollbar
  },
  signInAndUpContainer: {
    ...cardStyle
  },
  header: { marginBottom: 50 },
  headerTitle: { fontSize: 60 },
  signInForm: { margin: "25px auto" },
  form: {
    display: "flex",
    flexDirection: "column",
    height: "40vh",
    justifyContent: "space-between",
    fontSize: 25,
  },
  footer: {
    margin: "50px 0 0 0",
    fontSize: 20,
    lineHeight: 1.5,
  },
  footerLinks: {
    width: "fit-content",
    cursor: "pointer",
    transition: "0.3s",
    ':hover' : {
      opacity: 0.6,
    },
  },
});
