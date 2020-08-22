import { StyleSheet } from "aphrodite";

export const customButtonStyles = StyleSheet.create({
  customButton: {
    backgroundColor: "black",
    border: "2px solid black",
    maxWidth: "inherit",
    color: "white",
    padding: 10,
    fontSize: "inherit",
    cursor: "pointer",
    transition: "0.3s",
    ":hover": {
      transform: "scale(1.1)",
      backgroundColor: "white",
      color:'black'
    },
    ':active':{
        transform:'scale(0.8)',
        backgroundColor:"black",
        color:'white',
    }
  },
});
