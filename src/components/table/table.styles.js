import { StyleSheet } from "aphrodite";

export const tableStyles = StyleSheet.create({
    table: {
        width: "100%",
        maxWidth: 1500,
        margin: "30px auto",
        borderCollapse: "collapse",
      },
      tHead: {
        borderBottom: "2px solid black",
      },
      tHeadTr: {
        height: 40,
        fontSize: 30,
        '@media (max-width:1000px)':{
          fontSize:20
        }
      },
     
      i:{
        color:'green'
    },
})