import { StyleSheet } from "aphrodite";

export const formInputStyles = shrink=>(StyleSheet.create({
  formInputContainer: {
    marginVertical:20,
    position: "relative",
    width: "100%",
    fontSize: "inherit",
    display:"block"
  },
  labels:{
    display: "block",
    position: "absolute",
    bottom: 0,
    transition: "0.3s",
    pointerEvents: "none",
    color: shrink ? "black" : "rgba(0, 0, 0, 0.829)",
    top: shrink ? -14 :0,
    left: shrink ? 0 : 5,
    fontSize: shrink ? 12 : "inherit",
    height:'fit-content'
  },
  input: {
    fontSize: "inherit",
    padding: "0",
    backgroundColor: "transparent",
    display: "block",
    border:'none',
    borderBottom: "2px solid rgba(0, 0, 0, 0.377)",
    borderRadius: 5,
    transition: "0.3s",
    height: 30,

    ":focus": {
      borderColor: "black",
      outline: "none",
    },
  },
}));
