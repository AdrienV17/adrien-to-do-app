import { StyleSheet } from "aphrodite";
import { flex100Vh, overflowAuto, cardStyle, customTextHover } from "../../../assets/globalStyles";


export const modalContainerSubStyles = StyleSheet.create({
    modalContainer: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,.6)",
        width: "100vw",
        zIndex: 2,
        ...flex100Vh,
      },
      modalCard: {
        ...cardStyle,
        maxHeight: 500,
        ...overflowAuto,
        borderRadius: 20,
        boxShadow: "7px 10px 5px 0px rgba(0,0,0,0.27)",
        position: "relative",
      },
      closeButton: {
        position: "absolute",
        right: 40,
        top: 20,
        transition: "0.3s",
        cursor: "pointer",
        ":hover": {
          ...customTextHover.hover,
        },
        ":active": {
          ...customTextHover.active,
        },
      },
})